'use client';

import { Form } from '@/components/forms/form';
import {
  FormItem,
  FormItemErrorMessage,
  FormItemLabel,
} from '@/components/forms/form-item';
import { Input } from '@/components/forms/input';
import { PatternFormatInput } from '@/components/forms/pattern-format-input';
import { SubmitButton } from '@/components/forms/submit-button';
import { useRef } from 'react';
import { useFormState } from 'react-dom';
import { CardExpiryInput } from './card-expiry-input';
import { completeCheckout } from './checkout-actions';

export function CheckoutForm() {
  const formRef = useRef<React.ElementRef<'form'>>(null);
  const [state, formAction] = useFormState(completeCheckout, null);
  const fieldErrors = state?.success ? null : state?.fieldErrors;

  return (

    <div className='rounded-xl'>
      <Form ref={formRef} action={formAction}>
      <FormItem errorMessages={fieldErrors?.nameSurname?._errors}>
        <FormItemLabel htmlFor="nameSurname">Name </FormItemLabel>
        <Input id="nameSurname" name="nameSurname" placeholder="Name " />
        <FormItemErrorMessage />
      </FormItem>
      <FormItem errorMessages={fieldErrors?.cardNumber?._errors}>
        <FormItemLabel htmlFor="cardNumber">Card Number</FormItemLabel>
        <PatternFormatInput
          id="cardNumber"
          name="cardNumber"
          mask="_"
          format="#### #### #### ####"
          placeholder="0000 0000 0000 0000"
        />
        <FormItemErrorMessage />
      </FormItem>
      <div className="flex justify-between gap-4">
        <FormItem errorMessages={fieldErrors?.expiry?._errors}>
          <FormItemLabel htmlFor="expiry">Expiration Date</FormItemLabel>
          <CardExpiryInput id="expiry" name="expiry" />
          <FormItemErrorMessage />
        </FormItem>
        <FormItem errorMessages={fieldErrors?.cvc?._errors}>
          <FormItemLabel htmlFor="cvc">CVC</FormItemLabel>
          <PatternFormatInput
            id="cvc"
            name="cvc"
            mask="_"
            format="###"
            placeholder="000"
          />
          <FormItemErrorMessage />
        </FormItem>
      </div>
      <div className="flex justify-end">
        <SubmitButton variant="primary">Complete Checkout</SubmitButton>
      </div>
    </Form>
    </div>
    
  );
}
