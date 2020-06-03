# Matrix4
速度极快的图形矩阵/向量库（行主序）

该矩阵库是**行主序**的，因为行主序矩阵与我们日常对矩阵的认知一致（列主序矩阵太反人类了），因此在绑定着色器变量前要先对矩阵转置。
存储格式使用**Float32Array**，因为 TypedArray 在存取速度上比 Array 要更快。

包含内容：
- **Matrix4(Mat4, Float32Array[16]): 4 * 4 矩阵（3 * 3 线性变换矩形 + 位移项）**
- **Matrix3(Mat3, Float32Array[9]): 3 * 3 矩阵（2 * 3 线性变换矩形 + 位移项）**
- **Vector(Vec3, Float32Array[3]): 3 * 1 向量**
- **Vector(Vec2, Float32Array[2]): 2 * 1 向量**
- **Quaternion(Quat, Float32Array[4]): 四元数（TODO）**
- **Vec4(Float32Array[4]): 4 * 1 向量（3 * 1 向量 + 齐次坐标 w）**