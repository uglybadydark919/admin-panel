import { LayoutComponent } from "@/components/includes/layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const MngRating: NextPageWithLayout = () => {
    return (
        <div>
            MngRating
        </div>
    )
}

MngRating.getLayout = (page: ReactElement) => {
    return <LayoutComponent>{page}</LayoutComponent>
}

export default MngRating