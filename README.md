# Matrix4
速度极快的图形矩阵/向量库（行主序）

该矩阵库是**行主序**的，因为行主序矩阵与我们日常对矩阵的认知一致（列主序矩阵太反人类了），因此在绑定着色器变量前要先对矩阵转置。

包含内容：
- 4 * 4 矩阵（3 * 3 线性变换矩形 + 位移项）
- 3 * 3 矩阵（2 * 3 线性变换矩形 + 位移项）（TODO）
- 4 * 1 向量（3 * 1 向量 + 齐次坐标 w）
- 3 * 1 向量
- 2 * 1 向量（TODO）
- 四元数（TODO）
- 对偶四元数（TODO）
