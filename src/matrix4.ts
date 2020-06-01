import { Mat4, Vec3, Quat, Vec2 } from "./matrix";
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
        let m00 = value[0],
            m01 = value[1],
            m02 = value[2],
            m03 = value[3],
            m10 = value[4],
            m11 = value[5],
            m12 = value[6],
            m13 = value[7],
            m20 = value[8],
            m21 = value[9],
            m22 = value[10],
            m23 = value[11],
            m30 = value[12],
            m31 = value[13],
            m32 = value[14],
            m33 = value[15];

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
     * 从四元数构建矩阵(TODO)
     * @param m
     * @param quat 
     */
    fromQuaternion(m: Mat4, quat: Quat): Mat4 {
        return m;
    },

    /**
     * 设置位移矩阵(TODO)
     * @param m 
     * @param v
     */
    translate(m: Mat4, v: Vec3): Mat4 {
        let x = v[0],
            y = v[1],
            z = v[2];

        m[3] = m[0] * x + m[1] * y + m[2] * z + m[3];
        m[7] = m[4] * x + m[5] * y + m[6] * z + m[7];
        m[11] = m[8] * x + m[9] * y + m[10] * z + m[11];
        m[15] = m[12] * x + m[13] * y + m[14] * z + m[15];
    
        return m;
    },

    /**
     * 设置缩放矩阵
     * @param m 
     * @param v
     */
    scale(m: Mat4, v: Vec3): Mat4 {
        let x = v[0],
            y = v[1],
            z = v[2];

        m[0] = m[0] * x;
        m[4] = m[4] * x;
        m[8] = m[8] * x;
        m[12] = m[12] * x;

        m[1] = m[1] * y;
        m[5] = m[5] * y;
        m[9] = m[9] * y;
        m[13] = m[13] * y;

        m[2] = m[2] * z;
        m[6] = m[6] * z;
        m[10] = m[10] * z;
        m[14] = m[14] * z;

        return m;
    },

    /**
     * 设置旋转矩阵
     * @param m 
     * @param rad
     * @param axis
     */
    rotate(m: Mat4, rad: number, axis: Vec3): Mat4 {
        // let x = axis[0],
        //     y = axis[1],
        //     z = axis[2];

        // let len = Vector3.length(axis);
        // let s, c, t;
        // let a00, a01, a02, a03;
        // let a10, a11, a12, a13;
        // let a20, a21, a22, a23;
        // let b00, b01, b02;
        // let b10, b11, b12;
        // let b20, b21, b22;

        // len = 1 / len;
        // x *= len;
        // y *= len;
        // z *= len;

        // s = Math.sin(rad);
        // c = Math.cos(rad);
        // t = 1 - c;

        // a00 = a[0];
        // a01 = a[1];
        // a02 = a[2];
        // a03 = a[3];
        // a10 = a[4];
        // a11 = a[5];
        // a12 = a[6];
        // a13 = a[7];
        // a20 = a[8];
        // a21 = a[9];
        // a22 = a[10];
        // a23 = a[11];

        // // Construct the elements of the rotation matrix
        // b00 = x * x * t + c;
        // b01 = y * x * t + z * s;
        // b02 = z * x * t - y * s;
        // b10 = x * y * t - z * s;
        // b11 = y * y * t + c;
        // b12 = z * y * t + x * s;
        // b20 = x * z * t + y * s;
        // b21 = y * z * t - x * s;
        // b22 = z * z * t + c;

        // // Perform rotation-specific matrix multiplication
        // out[0] = a00 * b00 + a10 * b01 + a20 * b02;
        // out[1] = a01 * b00 + a11 * b01 + a21 * b02;
        // out[2] = a02 * b00 + a12 * b01 + a22 * b02;
        // out[3] = a03 * b00 + a13 * b01 + a23 * b02;
        // out[4] = a00 * b10 + a10 * b11 + a20 * b12;
        // out[5] = a01 * b10 + a11 * b11 + a21 * b12;
        // out[6] = a02 * b10 + a12 * b11 + a22 * b12;
        // out[7] = a03 * b10 + a13 * b11 + a23 * b12;
        // out[8] = a00 * b20 + a10 * b21 + a20 * b22;
        // out[9] = a01 * b20 + a11 * b21 + a21 * b22;
        // out[10] = a02 * b20 + a12 * b21 + a22 * b22;
        // out[11] = a03 * b20 + a13 * b21 + a23 * b22;

        // if (a !== out) {
        //     // If the source and destination differ, copy the unchanged last row
        //     out[12] = a[12];
        //     out[13] = a[13];
        //     out[14] = a[14];
        //     out[15] = a[15];
        // }

        return m;
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

        m.set([
            U[0], V[0], N[0], eye[0],
            U[1], V[1], N[1], eye[1],
            U[2], V[2], N[2], eye[2],
            0,    0,    0,    1
        ]);
        
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



