import { moduleFederationPlugin } from "@module-federation/sdk";

const SHARED = {
    react: {
        singleton: true,
        requiredVersion: "^19.2.4",
        eager: true,
    },
    "react-dom": {
        singleton: true,
        requiredVersion: "^19.2.4",
        eager: true,
    },
};

type ExposeName = string;
type ExposeType = string;

export function getRemoteFederationConfig(
    moduleName: string,
    exposes: Record<ExposeName, ExposeType>,
): moduleFederationPlugin.ModuleFederationPluginOptions {
    return {
        name: moduleName,
        filename: "remoteEntry.js",
        exposes: { ...exposes },
        dts: {
            tsConfigPath: "./tsconfig.federation.json",
        },
        manifest: false,
        shared: SHARED,
    };
}
type RemoteName = string;
type RemotePath = string;

export function getHostFederationConfig(
    hostName: string,
    remotes: Record<RemoteName, RemotePath>,
): moduleFederationPlugin.ModuleFederationPluginOptions {
    return {
        name: hostName,
        filename: "remoteEntry.js",
        remotes: remotes,
        dts: {
            consumeTypes: true,
            // typesFolder: "@mf-types",
        },
        shared: SHARED,
    };
}
