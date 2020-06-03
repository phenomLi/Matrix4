import { Mat4, Vec3, Quat, Vec2, _tempMatrix4 } from "./matrix";
import { Vector3 } from "./vector3";


/**
 * 4 * 4 矩阵
 */
export const Matrix4 = {

    /**
     * 创建 4 * 4 矩阵
     * @param value 
     */
    create(value?: Mat4): Mat4 {
        let mat4: Mat4 = new Float32Array(16);

        mat4[0] = 1;
        mat4[5] = 1;
        mat4[10] = 1;
        mat4[15] = 1;
        
        if(value !== undefined && Array.isArray(value)) {
            this.set(mat4, value);
        }

        return mat4;
    },

    /**
     * 设置矩阵值
     * @param m 
     * @param value 
     */
    set(m: Mat4, value: Mat4): Mat4 {
        m[0] = value[0];
        m[1] = value[1];
        m[2] = value[2];
        m[3] = value[3];
        m[4] = value[4];
        m[5] = value[5];
        m[6] = value[6];
        m[7] = value[7];
        m[8] = value[8];
        m[9] = value[9];
        m[10] = value[10];
        m[11] = value[11];
        m[12] = value[12];
        m[13] = value[13];
        m[14] = value[14];
        m[15] = value[15];
        
        return m;
    },

    /**
     * 矩阵相加
     * @param m1 
     * @param m2 
     * @param mOut 
     */
    add(m1: Mat4, m2: Mat4, mOut?: Mat4): Mat4 {
        let dest: Mat4;

        if(mOut !== undefined) {
            dest = mOut;
        }
        else {
            dest = this.create();
        }   

        dest[0] = m1[0] + m2[0];
        dest[1] = m1[1] + m2[1];
        dest[2] = m1[2] + m2[2];
        dest[3] = m1[3] + m2[3];

        dest[4] = m1[4] + m2[4];
        dest[5] = m1[5] + m2[5];
        dest[6] = m1[6] + m2[6];
        dest[7] = m1[7] + m2[7];

        dest[8] = m1[8] + m2[8];
        dest[9] = m1[9] + m2[9];
        dest[10] = m1[10] + m2[10];
        dest[11] = m1[11] + m2[11];

        dest[12] = m1[12] + m2[12];
        dest[13] = m1[13] + m2[13];
        dest[14] = m1[14] + m2[14];
        dest[15] = m1[15] + m2[15];

        return dest;
    },

    /**
     * 矩阵相减
     * @param m1 
     * @param m2 
     * @param mOut 
     */
    subtract(m1: Mat4, m2: Mat4, mOut?: Mat4): Mat4 {
        let dest: Mat4;

        if(mOut !== undefined) {
            dest = mOut;
        }
        else {
            dest = this.create();
        }   

        dest[0] = m1[0] - m2[0];
        dest[1] = m1[1] - m2[1];
        dest[2] = m1[2] - m2[2];
        dest[3] = m1[3] - m2[3];

        dest[4] = m1[4] - m2[4];
        dest[5] = m1[5] - m2[5];
        dest[6] = m1[6] - m2[6];
        dest[7] = m1[7] - m2[7];

        dest[8] = m1[8] - m2[8];
        dest[9] = m1[9] - m2[9];
        dest[10] = m1[10] - m2[10];
        dest[11] = m1[11] - m2[11];

        dest[12] = m1[12] - m2[12];
        dest[13] = m1[13] - m2[13];
        dest[14] = m1[14] - m2[14];
        dest[15] = m1[15] - m2[15];

        return dest;
    },

    /**
     * 矩阵相乘
     * @param mOut 
     */
    multiply(m1: Mat4, m2: Mat4, mOut?: Mat4): Mat4 {
        let dest: Mat4;

        if(mOut !== undefined) {
            dest = mOut;
        }
        else {
            dest = this.create();
        }   

        dest[0] = m1[0] * m2[0] + m1[1] * m2[4] + m1[2] * m2[8] + m1[3] * m2[12];
        dest[1] = m1[0] * m2[1] + m1[1] * m2[5] + m1[2] * m2[9] + m1[3] * m2[13];
        dest[2] = m1[0] * m2[2] + m1[1] * m2[6] + m1[2] * m2[10] + m1[3] * m2[14];
        dest[3] = m1[0] * m2[3] + m1[1] * m2[7] + m1[2] * m2[11] + m1[3] * m2[15];

        dest[4] = m1[4] * m2[0] + m1[5] * m2[4] + m1[6] * m2[8] + m1[7] * m2[12];
        dest[5] = m1[4] * m2[1] + m1[5] * m2[5] + m1[6] * m2[9] + m1[7] * m2[13];
        dest[6] = m1[4] * m2[2] + m1[5] * m2[6] + m1[6] * m2[10] + m1[7] * m2[14];
        dest[7] = m1[4] * m2[3] + m1[5] * m2[7] + m1[6] * m2[11] + m1[7] * m2[15];

        dest[8] = m1[8] * m2[0] + m1[9] * m2[4] + m1[10] * m2[8] + m1[11] * m2[12];
        dest[9] = m1[8] * m2[1] + m1[9] * m2[5] + m1[10] * m2[9] + m1[11] * m2[13];
        dest[10] = m1[8] * m2[2] + m1[9] * m2[6] + m1[10] * m2[10] + m1[11] * m2[14];
        dest[11] = m1[8] * m2[3] + m1[9] * m2[7] + m1[10] * m2[11] + m1[11] * m2[15];

        dest[12] = m1[12] * m2[0] + m1[13] * m2[4] + m1[14] * m2[8] + m1[15] * m2[12];
        dest[13] = m1[12] * m2[1] + m1[13] * m2[5] + m1[14] * m2[9] + m1[15] * m2[13];
        dest[14] = m1[12] * m2[2] + m1[13] * m2[6] + m1[14] * m2[10] + m1[15] * m2[14];
        dest[15] = m1[12] * m2[3] + m1[13] * m2[7] + m1[14] * m2[11] + m1[15] * m2[15];

        return dest;
    },

    /**
     * 矩阵与 3 维向量相乘
     * @param m 
     * @param v 
     * @param vOut 
     */
    multiplyVec3(m: Mat4, v: Vec3, vOut?: Vec3): Vec3 {
        let dest: Vec3;

        if(vOut !== undefined) {
            dest = vOut;
        }
        else {
            dest = Vector3.create();
        }

        dest[0] = m[0] * v[0] + m[1] * v[1] + m[2] * v[2] + m[3];
        dest[1] = m[4] * v[0] + m[5] * v[1] + m[6] * v[2] + m[7];
        dest[2] = m[8] * v[0] + m[9] * v[1] + m[10] * v[2] + m[11];

        return dest;
    },

    /**
     * 矩阵乘上一个数
     * @param m 
     * @param n
     */
    multiplyNum(m: Mat4, n: number): Mat4 {
        m[0] = m[0] * n;
        m[1] = m[1] * n;
        m[2] = m[2] * n;
        m[3] = m[3] * n;
        m[4] = m[4] * n;
        m[5] = m[5] * n;
        m[6] = m[6] * n;
        m[7] = m[7] * n;
        m[8] = m[8] * n;
        m[9] = m[9] * n;
        m[10] = m[10] * n;
        m[11] = m[11] * n;
        m[12] = m[12] * n;
        m[13] = m[13] * n;
        m[14] = m[14] * n;
        m[15] = m[15] * n;

        return m;
    },

    /**
     * 矩阵转置
     * @param m 
     */
    transpose(m: Mat4): Mat4 {
        let m00 = m[0],
            m01 = m[1],
            m02 = m[2],
            m03 = m[3],
            m10 = m[4],
            m11 = m[5],
            m12 = m[6],
            m13 = m[7],
            m20 = m[8],
            m21 = m[9],
            m22 = m[10],
            m23 = m[11],
            m30 = m[12],
            m31 = m[13],
            m32 = m[14],
            m33 = m[15];

        m[0] = m00;
        m[1] = m10;
        m[2] = m20;
        m[3] = m30;
        m[4] = m01;
        m[5] = m11;
        m[6] = m21;
        m[7] = m31;
        m[8] = m02;
        m[9] = m12;
        m[10] = m22;
        m[11] = m32;
        m[12] = m03;
        m[13] = m13;
        m[14] = m23;
        m[15] = m33;

        return m;
    },   

    /**
     * 转换为单位矩阵
     * @param m 
     */
    identity(m: Mat4): Mat4 {
        m[0] = m[5] = m[10] = m[15] = 1;
        m[1] = m[2] = m[3] = 0;
        m[4] = m[6] = m[7] = 0;
        m[8] = m[9] = m[11] = 0;
        m[12] = m[13] = m[14] = 0;

        return m;
    },

    /**
     * (TODO)
     * 从四元数构建矩阵
     * @param m
     * @param quat 
     */
    fromQuaternion(m: Mat4, quat: Quat): Mat4 {
        return m;
    },

    /**
     * 设置位移矩阵
     * @param m 
     * @param v
     */
    translate(m: Mat4, v: Vec3): Mat4 {
        _tempMatrix4[0] = 1;
        _tempMatrix4[1] = 0;
        _tempMatrix4[2] = 0;
        _tempMatrix4[3] = v[0];

        _tempMatrix4[4] = 0;
        _tempMatrix4[5] = 1;
        _tempMatrix4[6] = 0;
        _tempMatrix4[7] = v[1];

        _tempMatrix4[8] = 0;
        _tempMatrix4[9] = 0;
        _tempMatrix4[10] = 1;
        _tempMatrix4[11] = v[2];

        _tempMatrix4[12] = 0;
        _tempMatrix4[13] = 0;
        _tempMatrix4[14] = 0;
        _tempMatrix4[15] = 1;
    
        return Matrix4.multiply(_tempMatrix4, m, m);
    },

    /**
     * 设置缩放矩阵
     * @param m 
     * @param v
     */
    scale(m: Mat4, v: Vec3): Mat4 {
        _tempMatrix4[0] = v[0];
        _tempMatrix4[1] = 0;
        _tempMatrix4[2] = 0;
        _tempMatrix4[3] = 0;

        _tempMatrix4[4] = 0;
        _tempMatrix4[5] = v[1];
        _tempMatrix4[6] = 0;
        _tempMatrix4[7] = 0;

        _tempMatrix4[8] = 0;
        _tempMatrix4[9] = 0;
        _tempMatrix4[10] = v[2];
        _tempMatrix4[11] = 0;

        _tempMatrix4[12] = 0;
        _tempMatrix4[13] = 0;
        _tempMatrix4[14] = 0;
        _tempMatrix4[15] = 1;

        return Matrix4.multiply(_tempMatrix4, m, m);
    },

    /**
     * 设置旋转矩阵
     * @param m 
     * @param rad
     * @param axis
     */
    rotate(m: Mat4, rad: number, axis: Vec3): Mat4 {
        let sin = Math.sin(rad),
            cos = Math.cos(rad),
            ncos = 1 - cos,
            [x, y, z] = axis;

        _tempMatrix4[0] = cos * (1 - cos) * x**2;
        _tempMatrix4[1] = ncos * x * y - sin * z;
        _tempMatrix4[2] = ncos * x * z - sin * y;
        _tempMatrix4[3] = 0;

        _tempMatrix4[4] = ncos * x * y + sin * z;
        _tempMatrix4[5] = cos + ncos * y**2;
        _tempMatrix4[6] = ncos * y * z - sin * x;
        _tempMatrix4[7] = 0;

        _tempMatrix4[8] = ncos * x * z - sin * y;
        _tempMatrix4[9] = ncos * y * z + sin * x;
        _tempMatrix4[10] = cos + ncos * z**2;
        _tempMatrix4[11] = 0;

        _tempMatrix4[12] = 0;
        _tempMatrix4[13] = 0;
        _tempMatrix4[14] = 0;
        _tempMatrix4[15] = 1;

        return Matrix4.multiply(_tempMatrix4, m, m);
    },

    /**
     * 设置视图矩阵
     * @param m 
     * @param eye 
     * @param dir 
     * @param up 
     */
    setViewer(m: Mat4, eye: Vec3, dir: Vec3, up: Vec3) {
        let N = Vector3.negate(Vector3.normalize(dir)),
            U = Vector3.cross(up, N),
            V = Vector3.cross(N, U);

        m[0] = U[0];
        m[1] = V[0];
        m[2] = N[0];
        m[3] = eye[0];

        m[4] = U[1];
        m[5] = V[1];
        m[6] = N[1];
        m[7] = eye[1];

        m[8] = U[2];
        m[9] = V[2];
        m[10] = N[2];
        m[11] = eye[2];

        m[12] = 0;
        m[13] = 0;
        m[14] = 0;
        m[15] = 1;
        
        return m;
    },
    
    /**
     * 设置正交投影矩阵
     * @param m 
     * @param width 
     * @param height 
     * @param depth 
     */
    setOrthogonal(m: Mat4, width: Vec2, height: Vec2, depth: Vec2): Mat4 {
        let left = width[0], right = width[1],
            bottom = height[0], top = height[1],
            near = depth[0], far = depth[1],
            lr = 1 / (left - right),
            bt = 1 / (bottom - top),
            nf = 1 / (near - far);

        m[0] = -2 * lr;
        m[1] = 0;
        m[2] = 0;
        m[3] = (left + right) * lr;

        m[4] = 0;
        m[5] = -2 * bt;
        m[6] = 0;
        m[7] = (top + bottom) * bt;

        m[8] = 0;
        m[9] = 0;
        m[10] = 2 * nf;
        m[11] = (far + near) * nf;

        m[12] = 0;
        m[13] = 0;
        m[14] = 0;
        m[15] = 1;

        return m;
    },

    /**
     * 设置透视投影矩阵
     * @param m 
     * @param width 
     * @param height 
     * @param depth 
     */
    setPerspective(m: Mat4, width: Vec2, height: Vec2, depth: Vec2): Mat4 {
        let aspect = (width[1] - width[0]) / (height[1] - height[0]),
            near = depth[0],
            far = depth[1],
            f = 2 * near / (height[1] - height[0]) ,
            nf;

        m[0] = f / aspect;
        m[1] = 0;
        m[2] = 0;
        m[3] = 0;

        m[4] = 0;
        m[5] = f;
        m[6] = 0;
        m[7] = 0;

        m[8] = 0;
        m[9] = 0;

        m[12] = 0;
        m[13] = 0;
        m[14] = 1;
        m[15] = 0;

        if (far != null && far !== Infinity) {
            nf = 1 / (near - far);
            m[10] = (far + near) * nf;
            m[11] = 2 * far * near * nf;
        } else {
            m[10] = -1;
            m[11] = -2 * near;
        }

        return m;
    }
};



