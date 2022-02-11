export const Wompi = () => {
    
        return (
        <form action="https://checkout.wompi.co/p/" method="GET">
            <input type="hidden" name="public-key" value="MERCHANT_PUBLIC_KEY" />
            <input type="hidden" name="currency" value="CURRENCY" />
            <input type="hidden" name="amount-in-cents" value="AMOUNT_IN_CENTS" />
            <input type="hidden" name="reference" value="UNIQUE_PAYMENT_REFERENCE" />
        </form>)
}