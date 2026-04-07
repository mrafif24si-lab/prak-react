import { createRoot } from "react-dom/client";
import FrameworkList from "./frameworkList";
import "./tailwind.css";
import FrameworkListSearchFilter from "./frameworkListSearchFilter";
import ResponsiveDesign from "./ResponsiveDesign";

createRoot(document.getElementById("root"))
    .render(
        <div>
            <ResponsiveDesign />
            {/* <FrameworkListSearchFilter /> */}
        </div>
    )