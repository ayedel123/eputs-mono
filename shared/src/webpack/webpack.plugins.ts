import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

export function getPlugins(rootDir: string) {
    const htmlPlugin = new HtmlWebpackPlugin({
        template: path.resolve(rootDir, "public/index.html"),
    });

    return [htmlPlugin];
}
