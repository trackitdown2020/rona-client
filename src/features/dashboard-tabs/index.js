import { VerticalTabs } from "client/components/VerticalTabs";

const tabs = [
    {
        label: "Maps",
        component: () => {

        }
    }
]

function DashboardTabs() {
    return (
        <VerticalTabs tabs={tabs} />
    )
}