import { useEffect } from "react";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useActionData, useNavigation, useSubmit } from "@remix-run/react";
import React, { useState } from 'react';
import {
  Page,
  Layout,
  Text,
  Card,
  Button,
  BlockStack,
  Box,
  List,
  Link,
  InlineStack,
} from "@shopify/polaris";
import { authenticate } from "../shopify.server";
import OnBoarding from "./UI-Components/Global-components/OnBoarding";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);

  return null;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const { admin } = await authenticate.admin(request);
  const color = ["Red", "Orange", "Yellow", "Green"][
    Math.floor(Math.random() * 4)
  ];
  const response = await admin.graphql(
    `#graphql
      mutation populateProduct($input: ProductInput!) {
        productCreate(input: $input) {
          product {
            id
            title
            handle
            status
            variants(first: 10) {
              edges {
                node {
                  id
                  price
                  barcode
                  createdAt
                }
              }
            }
          }
        }
      }`,
    {
      variables: {
        input: {
          title: `${color} Snowboard`
        },
      },
    },
  );
  const responseJson = await response.json();

  return json({
    product: responseJson.data?.productCreate?.product,
  });
};

export default function Index() {
  const nav = useNavigation();
  const actionData = useActionData<typeof action>();
  const submit = useSubmit();
  const isLoading =
    ["loading", "submitting"].includes(nav.state) && nav.formMethod === "POST";
  const productId = actionData?.product?.id.replace(
    "gid://shopify/Product/",
    "",
  );

  // useEffect(() => {
  //   if (productId) {
  //     shopify.toast.show("Product created");
  //   }
  // }, [productId]);
  // const generateProduct = () => submit({}, { replace: true, method: "POST" });

  // function Onboarding() {
  //   const [step, setStep] = useState(1);
  
  //   const handleNextStep = () => {
  //     setStep(step + 1);
  //   };
  
  //   const handlePrevStep = () => {
  //     setStep(step - 1);
  //   };
  
  //   return (
  //     <div>
  //       <h1>Onboarding</h1>
  //       {step === 1 && (
  //         <Step1 onNextStep={handleNextStep} />
  //       )}
  //       {step === 2 && (
  //         <Step2 onNextStep={handleNextStep} onPrevStep={handlePrevStep} />
  //       )}
  //       {step === 3 && (
  //         <Step3 onPrevStep={handlePrevStep} />
  //       )}
  //     </div>
  //   );
  // }
  



  
  return (
    <Page>
      <ui-title-bar title="Remix app template">

        </ui-title-bar>
        <OnBoarding />
    </Page>
  );
}
