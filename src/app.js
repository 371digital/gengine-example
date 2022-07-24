import {
    BoxGeometry,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Renderer,
    Scene
} from "@371digital/gengine";

const Cube = ({ color }) => {
    return <Mesh
        refId="cube"
    >
        <BoxGeometry
            height={1}
            width={1}
            depth={1}
        />
        <MeshBasicMaterial
            color={color}
        />
    </Mesh>
};

const App = () => {
    return (
        <Renderer
            width={window.innerWidth}
            height={window.innerHeight}
            onAnimate={(getElementById) => {
                const element = getElementById("cube").threeElement;
                element.rotation.x += 0.01;
                element.rotation.y += 0.01;
            }}
        >
            <PerspectiveCamera
                fov={50}
                aspect={window.innerWidth / window.innerHeight}
                near={0.1}
                far={1000}
                position={{
                    z: 5
                }}
            />
            <Scene>
                <Cube color={"#00FF0D"}/>
            </Scene>
        </Renderer >
    )
};

export default App;