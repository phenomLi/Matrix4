import { Mat4, Vec3 } from "./matrix";
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
            mat4[0] = value[0];
            mat4[1] = value[1];
            mat4[2] = value[2];
            mat4[3] = value[3];
            mat4[4] = value[4];
            mat4[5] = value[5];
            mat4[6] = value[6];
            mat4[7] = value[7];
            mat4[8] = value[8];
            mat4[9] = value[9];
            mat4[10] = value[10];
            mat4[11] = value[11];
            mat4[12] = value[12];
            mat4[13] = value[13];
            mat4[14] = value[14];
            mat4[15] = value[15];
        }

        return mat4;
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
     * @param mOut 
     */
    multiplyNum(m: Mat4, n: number, mOut?: Mat4): Mat4 {
        let dest: Mat4;

        if(mOut !== undefined) {
            dest = mOut;
        }
        else {
            dest = m;
        }

        dest[0] = m[0] * n;
        dest[1] = m[1] * n;
        dest[2] = m[2] * n;
        dest[3] = m[3] * n;
        dest[4] = m[4] * n;
        dest[5] = m[5] * n;
        dest[6] = m[6] * n;
        dest[7] = m[7] * n;
        dest[8] = m[8] * n;
        dest[9] = m[9] * n;
        dest[10] = m[10] * n;
        dest[11] = m[11] * n;
        dest[12] = m[12] * n;
        dest[13] = m[13] * n;
        dest[14] = m[14] * n;
        dest[15] = m[15] * n;

        return dest;
    },

    /**
     * 矩阵转置
     * @param m 
     * @param Mat4 
     */
    transpose(m: Mat4, mOut?: Mat4): Mat4 {
        let dest: Mat4;

        if(mOut !== undefined) {
            dest = mOut;
        }
        else {
            dest = m;
        }

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

        dest[0] = m00;
        dest[1] = m10;
        dest[2] = m20;
        dest[3] = m30;
        dest[4] = m01;
        dest[5] = m11;
        dest[6] = m21;
        dest[7] = m31;
        dest[8] = m02;
        dest[9] = m12;
        dest[10] = m22;
        dest[11] = m32;
        dest[12] = m03;
        dest[13] = m13;
        dest[14] = m23;
        dest[15] = m33;

        return dest;
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
     * 设置位移矩阵
     * @param m 
     * @param x 
     * @param y 
     * @param z 
     * @param mOut 
     */
    translate(m: Mat4, x:number, y: number, z: number, mOut?: Mat4): Mat4 {
        let dest: Mat4;

        if(mOut !== undefined) {
            dest = mOut;
        }
        else {
            dest = m;
        }   

        return dest;
    },

    /**
     * 设置缩放矩阵
     * @param m 
     * @param x 
     * @param y 
     * @param z 
     * @param mOut 
     */
    scale(m: Mat4, x:number, y: number, z: number, mOut?: Mat4): Mat4 {
        let dest: Mat4;

        if(mOut !== undefined) {
            dest = mOut;
        }
        else {
            dest = m;
        }   

        return dest;
    },

    /**
     * 设置旋转矩阵
     * @param m 
     * @param mOut 
     */
    rotate(m: Mat4, mOut?: Mat4): Mat4 {
        let dest: Mat4;

        if(mOut !== undefined) {
            dest = mOut;
        }
        else {
            dest = m;
        }   

        return dest;
    }
};



