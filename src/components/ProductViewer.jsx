import useMacbookStore from "../store/index.js";
import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import {Box, OrbitControls} from "@react-three/drei";
import MacbookModel14 from "./models/Macbook-14.jsx";
import StudioLights from "./three/StudioLights.jsx";

import ModelSwitcher from "./three/ModelSwitcher.jsx";
import {useMediaQuery} from "react-responsive";

const ProductViewer = () => {
    const { color, setColor, scale, setScale } = useMacbookStore();

    const isMobile = useMediaQuery({ query: "(max-width: 1200px)" });
    return (
        <section id="product-viewer">
            <h2>Take a closer look.</h2>

            <div className="controls">
                <p className="info">
                    Macbook Pro | Available in 14" & 16" in Space Gray & Dark colors
                </p>

                <div className="flex-center gap-5 mt-5">

                    {/* COLOR CONTROL */}
                    <div className="color-control">
                        <div
                            onClick={() => setColor("#abd5bd")}
                            className={clsx(
                                "color-option bg-neutral-300",
                                color === "#abd5bd" && "active"
                            )}
                        />

                        <div
                            onClick={() => setColor("#2e2c2e")}
                            className={clsx(
                                "color-option bg-neutral-900",
                                color === "#2e2c2e" && "active"
                            )}
                        />
                    </div>

                    {/* SIZE CONTROL */}
                    <div className="size-control">
                        <div
                            onClick={() => setScale(0.06)}
                            className={clsx(
                                "size-btn",
                                scale === 0.06
                                    ? "bg-white text-black"
                                    : "bg-transparent text-white"
                            )}
                        >
                            <p>14"</p>
                        </div>

                        <div
                            onClick={() => setScale(0.08)}
                            className={clsx(
                                "size-btn",
                                scale === 0.08
                                    ? "bg-white text-black"
                                    : "bg-transparent text-white"
                            )}
                        >
                            <p>16"</p>
                        </div>
                    </div>
                </div>
            </div>

            <Canvas id="canvas" camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100}}>
                <StudioLights />

               <ModelSwitcher scale={isMobile ? scale - 0.03 : scale} isMobile={isMobile}/>
            </Canvas>
        </section>
    );
};

export default ProductViewer;
