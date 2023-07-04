import findGuide from "@/findGuide/findGuide";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Index(){
    const router = useRouter();
    const origin ='';
    typeof window !== 'undefined' && window.location.origin
        ? window.location.origin
        : '';

    const URL = `${origin}${router.asPath}`;
    const {className} = router.query;

    useEffect(() => {
        if(!className)
            return;
        const guide = findGuide(className.toString());
        if(!guide)
            return;
            router.push(`${guide.link}` , URL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    } , [className])
   
}