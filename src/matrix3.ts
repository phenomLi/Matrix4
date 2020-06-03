import { Mat3, Vec2, _tempMatrix3 } from "./matrix";
import { Vector2 } from "./vector2";


/**
 * 3 * 3 矩阵
 */
export const Matrix3 = {
    
    /**
     * 创建 3 * 3 矩阵
     * @param value 
     */
    create(value?: Mat3): Mat3 {
        let Mat3: Mat3 = new Float32Array(9);

        Mat3[0] = 1;
        Mat3[4] = 1;
        Mat3[8] = 1;
        
        if(value !== undefined && Array.isArray(value)) {
            this.set(Mat3, value);
        }

        return Mat3;
    },

    /**
     * 设置矩阵值
     * @param m 
     * @param value 
     */
    set(m: Mat3, value: Mat3): Mat3 {
        m[0] = value[0];
        m[1] = value[1];
        m[2] = value[2];
        m[3] = value[3];
        m[4] = value[4];
        m[5] = value[5];
        m[6] = value[6];
        m[7] = value[7];
        m[8] = value[8];
        
        return m;
    },

    /**
     * 矩阵相加
     * @param m1 
     * @param m2 
     * @param mOut 
     */
    add(m1: Mat3, m2: Mat3, mOut?: Mat3): Mat3 {
        let dest: Mat3;

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

        return dest;
    },

    /**
     * 矩阵相减
     * @param m1 
     * @param m2 
     * @param mOut 
     */
    subtract(m1: Mat3, m2: Mat3, mOut?: Mat3): Mat3 {
        let dest: Mat3;

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

        return dest;
    },

    /**
     * 矩阵相乘
     * @param mOut 
     */
    multiply(m1: Mat3, m2: Mat3, mOut?: Mat3): Mat3 {
        let dest: Mat3;

        if(mOut !== undefined) {
            dest = mOut;
        }
        else {
            dest = this.create();
        }   

        dest[0] = m1[0] * m2[0] + m1[1] * m2[3] + m1[2] * m2[6];
        dest[1] = m1[0] * m2[1] + m1[1] * m2[4] + m1[2] * m2[7];
        dest[2] = m1[0] * m2[3] + m1[1] * m2[5] + m1[2] * m2[8];

        dest[3] = m1[3] * m2[0] + m1[4] * m2[3] + m1[5] * m2[6];
        dest[4] = m1[3] * m2[1] + m1[4] * m2[4] + m1[5] * m2[7];
        dest[5] = m1[3] * m2[3] + m1[4] * m2[5] + m1[5] * m2[8];

        dest[6] = m1[6] * m2[0] + m1[7] * m2[3] + m1[8] * m2[6];
        dest[7] = m1[6] * m2[1] + m1[7] * m2[4] + m1[8] * m2[7];
        dest[8] = m1[6] * m2[3] + m1[7] * m2[5] + m1[8] * m2[8];

        return dest;
    },

    /**
     * 矩阵与 2 维向量相乘
     * @param m 
     * @param v 
     * @param vOut 
     */
    multiplyVec2(m: Mat3, v: Vec2, vOut?: Vec2): Vec2 {
        let dest: Vec2;

        if(vOut !== undefined) {
            dest = vOut;
        }
        else {
            dest = Vector2.create();
        }

        dest[0] = m[0] * v[0] + m[1] * v[1] + m[2];
        dest[1] = m[3] * v[0] + m[4] * v[1] + m[5];

        return dest;
    },

    /**
     * 矩阵乘上一个数
     * @param m 
     * @param n
     */
    multiplyNum(m: Mat3, n: number): Mat3 {
        m[0] = m[0] * n;
        m[1] = m[1] * n;
        m[2] = m[2] * n;
        m[3] = m[3] * n;
        m[4] = m[4] * n;
        m[5] = m[5] * n;
        m[6] = m[6] * n;
        m[7] = m[7] * n;
        m[8] = m[8] * n;

        return m;
    },

    /**
     * 矩阵转置
     * @param m 
     */
    transpose(m: Mat3): Mat3 {
        let m00 = m[0],
            m01 = m[1],
            m02 = m[2],
            m10 = m[3],
            m11 = m[4],
            m12 = m[5],
            m20 = m[6],
            m21 = m[7],
            m22 = m[8];

        m[0] = m00;
        m[1] = m10;
        m[2] = m20;
        m[3] = m01;
        m[4] = m11;
        m[5] = m21;
        m[6] = m02;
        m[7] = m12;
        m[8] = m22;

        return m;
    },   

    /**
     * 转换为单位矩阵
     * @param m 
     */
    identity(m: Mat3): Mat3 {
        m[0] = m[4] = m[8] = 1;
        m[1] = m[2] = 0;
        m[3] = m[5] = 0;
        m[6] = m[7] = 0;

        return m;
    },

    /**
     * 设置位移矩阵
     * @param m 
     * @param v
     */
    translate(m: Mat3, v: Vec2): Mat3 {
        _tempMatrix3[0] = 1;
        _tempMatrix3[1] = 0;
        _tempMatrix3[2] = v[0];

        _tempMatrix3[3] = 0;
        _tempMatrix3[4] = 1;
        _tempMatrix3[5] = v[1];

        _tempMatrix3[6] = 0;
        _tempMatrix3[7] = 0;
        _tempMatrix3[8] = 1;
    
        return Matrix3.multiply(_tempMatrix3, m, m);
    },

    /**
     * 设置缩放矩阵
     * @param m 
     * @param v
     */
    scale(m: Mat3, v: Vec2): Mat3 {
        _tempMatrix3[0] = v[0];
        _tempMatrix3[1] = 0;
        _tempMatrix3[2] = 0;

        _tempMatrix3[3] = 0;
        _tempMatrix3[4] = v[1];
        _tempMatrix3[5] = 0;

        _tempMatrix3[6] = 0;
        _tempMatrix3[7] = 0;
        _tempMatrix3[8] = 1;

        return Matrix3.multiply(_tempMatrix3, m, m);
    },

    /**
     * 设置旋转矩阵
     * @param m 
     * @param rad
     * @param center
     */
    rotate(m: Mat3, rad: number, center: Vec2): Mat3 {
        let sin = Math.sin(rad),
            cos = Math.cos(rad),
            ncos = 1 - cos,
            [cx, cy] = center;

        _tempMatrix3[0] = cos;
        _tempMatrix3[1] = -sin;
        _tempMatrix3[2] = ncos * cx + sin * cy;

        _tempMatrix3[3] = sin;
        _tempMatrix3[4] = cos;
        _tempMatrix3[5] = ncos * cy - sin * cx;

        _tempMatrix3[6] = 0;
        _tempMatrix3[7] = 0;
        _tempMatrix3[8] = 1;

        return Matrix3.multiply(_tempMatrix3, m, m);
    }
};
