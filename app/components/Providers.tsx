'use client'

import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

function CartProviders({ children }: { children: ReactNode }) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="https://e-commerce-azure-pi-60.vercel.app/success"
      cancelUrl="https://e-commerce-azure-pi-60.vercel.app/error"
      currency="USD"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </USCProvider>
  );
}

export default CartProviders;
