import { useEffect, useRef} from "react";

export const Wompi = () => {
    
    let form = useRef()
    
    useEffect(() => {
        // let script = document.('script');
        let script = document.createElement("script")
        script.setAttribute('src', "https://checkout.wompi.co/v1/checkout.js")
        script.setAttribute('data-render', "button")
        script.setAttribute('data-public-key', "pub_test_X0zDA9xoKdePzhd8a0x9HAez7HgGO2fH")
        script.setAttribute('data-currency', "COP")
        script.setAttribute('data-amount-in-cents', "4950000")
        script.setAttribute('data-reference', "4XMPGKWWPKWQ")
        script.setAttribute('crossorigin', "")
        form.current.appendChild(script);
        console.log(script)
    }, []);
        return (
            <form ref={form}> </form>
            )
}