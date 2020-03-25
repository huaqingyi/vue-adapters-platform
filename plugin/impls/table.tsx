export interface AdapterColumn {
    // 渲染类型 index;radio;checkbox;expand
    type?: string;
    // 在 v3.0 中废弃 prop
    prop?: string;
    // 在 v3.0 中废弃 label
    label?: string;
    // 列字段名
    field?: string;
    // 列标题
    title?: string;
    // 列宽度
    width?: Array<number | string>;
    // 列最小宽度，把剩余宽度按比例分配
    minWidth?: Array<number | string>;
    // 是否允许拖动列宽调整大小
    resizable?: boolean;
    // 将列固定在左侧或者右侧
    fixed?: string;
    // 列对其方式
    align?: string;
    // 表头对齐方式
    headerAlign?: string;
    // 表尾列的对齐方式
    footerAlign?: string;
    // 当内容过长时显示为省略号
    showOverflow?: boolean | string;
    // 当表头内容过长时显示为省略号
    showHeaderOverflow?: boolean | string;
    // 当表尾内容过长时显示为省略号
    showFooterOverflow?: boolean | string;
    // 给单元格附加 className
    className?: Array<string | Function>;
    // 给表头单元格附加 className
    headerClassName?: Array<string | Function>;
    // 给表尾单元格附加 className
    footerClassName?: Array<string | Function>;
    // 格式化显示内容
    formatter?: Array<string | Function | Array<any>>;
    // 自定义索引方法
    indexMethod?: Function;
    // 是否允许排序
    sortable?: boolean;
    // 是否服务端排序
    remoteSort?: boolean;
    // 自定义排序的属性
    sortBy?: Array<string | Array<any>>;
    // 自定义排序方法
    sortMethod?: Function;
    // 配置筛选条件数组
    filters?: Array<any>;
    // 筛选是否允许多选
    filterMultiple?: boolean;
    // 自定义筛选方法
    filterMethod?: Function;
    // 筛选模板配置项
    filterRender?: object;
    // 指定为树节点
    treeNode?: boolean;
    // 是否可视
    visible?: boolean;
    // 单元格渲染配置项
    cellRender?: object;
    // 单元格编辑渲染配置项
    editRender?: object;
    // 内容渲染配置项
    contentRender?: object;
    // 额外的参数
    params?: object
}