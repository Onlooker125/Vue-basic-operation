module.exports = {
    // 开启代理服务器（方式一）
    // devServer: {
    //     proxy: 'http://localhost:5000'
    // }
    // 开启代理服务器（方式二）
    devServer: {
        proxy: {
            '/students': { //请求头：如果与请求的名字一样可以不用在.get的时候加上请求头
                target: 'http://localhost:5000',
                // pathRewrite:{'^/Tang':''},
                ws: true, // 用于支持websocket
                changeOrigin: true // 用于控制请求头中的host值
            },
            '/Tang': { //请求头：这里的请求头跟请求信息不一致，所以要在.get的时候加上请求头，还必须加上pathRewrite
                target: 'http://localhost:5001',
                pathRewrite: { '^/Tang': '' }, // 过滤掉path是 /Tang 的路径名
                ws: true,
                changeOrigin: true
            },

        }
    }
}