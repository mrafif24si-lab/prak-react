import { createRoot } from "react-dom/client";
import FrameworkList from "./frameworkList";
import "./tailwind.css";
import FrameworkListSearchFilter from "./frameworkListSearchFilter";


createRoot(document.getElementById("root"))
    .render(
        <div>
            <FrameworkListSearchFilter />
        </div>
    )