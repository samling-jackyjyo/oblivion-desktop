import { Language } from './type';

const chinese: Language = {
    global: {},
    status: {
        connecting: '连接中...',
        connected: '已连接',
        connected_confirm: '已连接',
        disconnecting: '断开连接中...',
        disconnected: '已断开连接',
        ip_check: '检查 IP 中...'
    },
    home: {
        title_warp_based: '基于 Warp',
        drawer_settings_warp: 'Warp 设置',
        drawer_settings_routing_rules: '路由规则',
        drawer_settings_app: '应用设置',
        drawer_settings_scanner: '扫描仪设置',
        drawer_settings_network: '网络设置',
        drawer_log: '应用日志',
        drawer_update: '更新',
        drawer_update_label: '新版本',
        drawer_speed_test: '速度测试',
        drawer_about: '关于应用',
        drawer_lang: '更改语言'
    },
    toast: {
        ip_check_please_wait: '请等待几秒钟后重试检查！',
        ir_location:
            'Cloudflare 已连接到一个具有伊朗位置的 IP，与您的实际 IP 不同。您可以使用它来绕过过滤，但不会绕过制裁。不用担心！您可以在设置中使用 Gool 或 psiphon 选项更改位置。',
        btn_submit: '了解',
        copied: '已复制！',
        cleared: '日志已被清除！',
        please_wait: '请等待...',
        offline: '您处于离线状态！',
        settings_changed: '应用设置已更改，需要重新连接。'
    },
    settings: {
        title: 'Warp 设置',
        more: '更多设置',
        method_warp: 'Warp',
        method_warp_desc: '启用 Warp',
        method_gool: 'Gool',
        method_gool_desc: '启用 WarpInWarp',
        method_psiphon: 'Psiphon',
        method_psiphon_desc: '启用 Psiphon',
        method_psiphon_location: '选择国家',
        method_psiphon_location_auto: '自动',
        method_psiphon_location_desc: '选择所需的国家 IP 地址',
        endpoint: '端点',
        endpoint_desc: 'IP 或域名与端口的组合',
        license: '许可证',
        license_desc: '许可证消耗翻倍',
        option: '应用设置',
        network: '网络设置',
        proxy_mode: '代理模式',
        proxy_mode_desc: '选择代理模式',
        port: '代理端口',
        port_desc: '定义应用的代理端口',
        share_vpn: '允许局域网连接',
        share_vpn_desc: '在局域网上共享代理',
        dns: '更改 DNS',
        dns_desc: '使用 Google 公共 DNS',
        ip_data: '解析目标地址',
        ip_data_desc: '连接后显示 IP 和位置',
        dark_mode: '深色模式',
        dark_mode_desc: '定义应用主题模式',
        lang: '语言',
        lang_desc: '更改应用界面语言',
        open_login: '开机自启',
        open_login_desc: '系统启动时打开',
        auto_connect: '自动连接',
        auto_connect_desc: '应用程序打开时连接',
        system_tray: '隐藏系统托盘',
        system_tray_desc: '不在任务栏显示应用图标',
        restore: '恢复默认设置',
        restore_desc: '将应用设置还原为默认值',
        scanner: '扫描仪设置',
        scanner_alert: '如果您使用默认端点地址，扫描仪将被激活。',
        scanner_ip_type: '端点类型',
        scanner_ip_type_auto: '自动',
        scanner_ip_type_desc: '用于查找终点 IP',
        scanner_rtt: 'RTT 延迟',
        scanner_rtt_default: '默认',
        scanner_rtt_desc: '设置扫描仪 RTT 延迟值',
        scanner_reserved: '保留',
        scanner_reserved_desc: '覆盖 wireguard 保留值',
        routing_rules: '黑名单',
        routing_rules_desc: '阻止 Warp 的流量通过',
        routing_rules_disabled: '已禁用',
        routing_rules_items: '项目',
        profile: '个人资料',
        profile_desc: '您保存的端点'
    },
    tabs: {
        home: '连接',
        warp: 'Warp',
        network: '网络',
        scanner: '扫描仪',
        app: '应用'
    },
    modal: {
        endpoint_title: '端点',
        license_title: '许可证',
        license_desc:
            '应用不一定需要 Warp 许可证才能运行，但如果您愿意，可以在此处输入您的许可证。',
        license_clear: '清除',
        port_title: '代理端口',
        restore_title: '恢复更改',
        restore_desc: '确认恢复默认设置后，所有应用设置将恢复为默认值，并且您的连接将断开。',
        routing_rules_sample: '示例',
        endpoint_default: '默认',
        endpoint_suggested: '建议',
        endpoint_latest: '最新的',
        endpoint_update: '接收建议的端点',
        profile_title: '个人资料',
        profile_name: '标题',
        profile_endpoint: '端点',
        confirm: '确认',
        update: '更新',
        cancel: '取消'
    },
    log: {
        title: '应用日志',
        desc: '如果应用生成日志，将在此处显示。',
        error_invalid_license: '输入的许可证无效；去掉它。',
        error_too_many_connected: '许可证使用限制已满；去掉它。',
        error_access_denied: '以管理员身份运行程序。',
        error_failed_set_endpoint: '检查或替换端点值，或重试。',
        error_warp_identity: 'cloudflare 中的身份验证错误；再试一次。',
        error_script_failed: '程序遇到错误；再试一次。',
        error_object_null: '程序遇到错误；再试一次。',
        error_port_already_in_use: (value) => `端口 ${value} 正在被另一个程序使用；更改。`,
        error_port_socket: '使用另一个端口。',
        error_unknown_flag: '后台执行了无效命令。',
        error_deadline_exceeded: '连接超时；再试一次。',
        error_configuration_encountered: '代理配置遇到错误！',
        error_desktop_not_supported: '不支持桌面环境！',
        error_configuration_not_supported:
            '您的操作系统不支持代理配置，但您可以手动使用 Warp 代理。',
        error_configuring_proxy: (value) => `为 ${value} 配置代理时出错！`,
        error_wp_not_found: 'warp-plus 文件不在应用程序包旁边。',
        error_connection_failed: '无法连接到1.1.1.1。'
    },
    about: {
        title: '关于应用',
        desc: '该应用程序是 Warp 客户端的 Windows、Linux 和 MacOS 的非官方但可靠版本，基于 Oblivion 或 Forget 项目。\nOblivion Desktop应用旨在实现对互联网的自由访问。界面设计基于 Yousef Ghobadi 开发的原始版本。不允许任何改名或商业用途。',
        slogan: '互联网，联万物；不通达，何存乎！'
    },
    systemTray: {
        connect: '连接',
        connecting: '正在连接 ...',
        connected: '已连接',
        disconnecting: '断开连接 ...',
        settings: '设置',
        settings_warp: 'Warp',
        settings_network: '网络',
        settings_scanner: '扫描仪',
        settings_app: '应用程序',
        about: '关于',
        log: '日志',
        exit: '退出'
    },
    update: {
        available: '有更新',
        available_message: (value) => `新的 ${value} 版本可用。您想现在更新吗？`,
        ready: '更新已准备好',
        ready_message: (value) =>
            `新的 ${value} 版本已准备好。它将在重新启动后安装。您想现在重新启动吗？`
    }
};
export default chinese;
