import { Mat4, Vec3, Quat, _tempMatrix4, _tempMatrix3 } from "./matrix";
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

        let d00, d01, d02, d03,
            d10, d11, d12, d13,
            d20, d21, d22, d23, 
            d30, d31, d32, d33;

        d00 = m1[0] * m2[0] + m1[1] * m2[4] + m1[2] * m2[8] + m1[3] * m2[12];
        d01 = m1[0] * m2[1] + m1[1] * m2[5] + m1[2] * m2[9] + m1[3] * m2[13];
        d02 = m1[0] * m2[2] + m1[1] * m2[6] + m1[2] * m2[10] + m1[3] * m2[14];
        d03 = m1[0] * m2[3] + m1[1] * m2[7] + m1[2] * m2[11] + m1[3] * m2[15];

        d10 = m1[4] * m2[0] + m1[5] * m2[4] + m1[6] * m2[8] + m1[7] * m2[12];
        d11 = m1[4] * m2[1] + m1[5] * m2[5] + m1[6] * m2[9] + m1[7] * m2[13];
        d12 = m1[4] * m2[2] + m1[5] * m2[6] + m1[6] * m2[10] + m1[7] * m2[14];
        d13 = m1[4] * m2[3] + m1[5] * m2[7] + m1[6] * m2[11] + m1[7] * m2[15];

        d20 = m1[8] * m2[0] + m1[9] * m2[4] + m1[10] * m2[8] + m1[11] * m2[12];
        d21 = m1[8] * m2[1] + m1[9] * m2[5] + m1[10] * m2[9] + m1[11] * m2[13];
        d22 = m1[8] * m2[2] + m1[9] * m2[6] + m1[10] * m2[10] + m1[11] * m2[14];
        d23 = m1[8] * m2[3] + m1[9] * m2[7] + m1[10] * m2[11] + m1[11] * m2[15];

        d30 = m1[12] * m2[0] + m1[13] * m2[4] + m1[14] * m2[8] + m1[15] * m2[12];
        d31 = m1[12] * m2[1] + m1[13] * m2[5] + m1[14] * m2[9] + m1[15] * m2[13];
        d32 = m1[12] * m2[2] + m1[13] * m2[6] + m1[14] * m2[10] + m1[15] * m2[14];
        d33 = m1[12] * m2[3] + m1[13] * m2[7] + m1[14] * m2[11] + m1[15] * m2[15];

        dest[0] = d00; dest[1] = d01; dest[2] = d02; dest[3] = d03;
        dest[4] = d10; dest[5] = d11; dest[6] = d12; dest[7] = d13;
        dest[8] = d20; dest[9] = d21; dest[10] = d22; dest[11] = d23;
        dest[12] = d30; dest[13] = d31; dest[14] = d32; dest[15] = d33;

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

        let v0, v1, v2;

        v0 = m[0] * v[0] + m[1] * v[1] + m[2] * v[2] + m[3];
        v1 = m[4] * v[0] + m[5] * v[1] + m[6] * v[2] + m[7];
        v2 = m[8] * v[0] + m[9] * v[1] + m[10] * v[2] + m[11];

        dest[0] = v0;
        dest[1] = v1;
        dest[2] = v2;

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
     * 求矩阵的某个元素的代数余子式
     * @param m 
     * @param i 
     */
    factor(m: Mat4, i: number): number {
        let d = new Float32Array(9),
            k , n = 0;

        for(k = 0; k < m.length; k++) {
            if(Math.abs(k - i) >= 4 && i % 4 !== k % 4) {
                d[n] = m[k];
                n++;
            }
        }
    
        let a11 = d[0], a12 = d[1], a13 = d[2],
            a21 = d[3], a22 = d[4], a23 = d[5],
            a31 = d[6], a32 = d[7], a33 = d[8],
            det = a11 * a22 * a33 + a12 * a23 * a31 + a13 * a21 * a32 - a13 * a22 * a31 - a12 * a21 * a33 - a11 * a23 * a32;

        return (-1)**(Math.floor(i / 4) + 1 + i % 4 + 1) * det;
    },

    /**
     *  求矩阵行列式
     * @param m 
     */
    determinant(m: Mat4): number {
        let det = 0;

        for(let i = 0; i < m.length; i++) {
            det += m[i] * Matrix4.factor(m, i);
        }

        return det;
    },

    /**
     * 矩阵求逆
     * @param m 
     * @param mOut 
     */
    invert(m: Mat4, mOut?: Mat4): Mat4 {
        let dest: Mat4;

        if(mOut !== undefined) {
            dest = mOut;
        }
        else {
            dest = this.create();
        }   

        const det = Matrix4.determinant(m);

        dest[0] = Matrix4.factor(m, 0);
        dest[4] = Matrix4.factor(m, 1);
        dest[8] = Matrix4.factor(m, 2);
        dest[12] = Matrix4.factor(m, 3);

        dest[1] = Matrix4.factor(m, 4);
        dest[5] = Matrix4.factor(m, 5);
        dest[9] = Matrix4.factor(m, 6);
        dest[13] = Matrix4.factor(m, 7);

        dest[2] = Matrix4.factor(m, 8);
        dest[6] = Matrix4.factor(m, 9);
        dest[10] = Matrix4.factor(m, 10);
        dest[14] = Matrix4.factor(m, 11);

        dest[3] = Matrix4.factor(m, 12);
        dest[7] = Matrix4.factor(m, 13);
        dest[11] = Matrix4.factor(m, 14);
        dest[15] = Matrix4.factor(m, 15);

        return Matrix4.multiplyNum(dest, 1 / det);
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
     * @param ex 
     * @param ey 
     * @param ez 
     * @param dx 
     * @param dy 
     * @param dz 
     * @param ux 
     * @param uy 
     * @param uz 
     */
    setViewer(m: Mat4, ex: number, ey: number, ez: number, dx: number, dy: number, dz: number, ux: number, uy: number, uz: number): Mat4 {
        let Nx, Ny, Nz, Ux, Uy, Uz, Vx, Vy, Vz, Nlen, Ulen;
            
        Matrix4.translate(m, new Float32Array([-ex, -ey, -ez]));

        Nlen = 1 / Math.hypot(dx, dy, dz);
        Nx = dx * Nlen;
        Ny = dy * Nlen;
        Nz = dz * Nlen;

        Ux = Ny * uz - Nz * uy;
        Uy = Nz * ux - Nx * uz;
        Uz = Nx * uy - Ny * ux;

        Ulen = 1 / Math.hypot(Ux, Uy, Uz);
        Ux *= Ulen;
        Uy *= Ulen;
        Uz *= Ulen;

        Vx = Uy * Nz - Uz * Ny;
        Vy = Uz * Nx - Ux * Nz;
        Vz = Ux * Ny - Uy * Nx;

        _tempMatrix4[0] = Ux;
        _tempMatrix4[1] = Uy;
        _tempMatrix4[2] = Uz;
        _tempMatrix4[3] = 0;

        _tempMatrix4[4] = Vx;
        _tempMatrix4[5] = Vy;
        _tempMatrix4[6] = Vz;
        _tempMatrix4[7] = 0;

        _tempMatrix4[8] = -Nx;
        _tempMatrix4[9] = -Ny;
        _tempMatrix4[10] = -Nz;
        _tempMatrix4[11] = 0;

        _tempMatrix4[12] = 0;
        _tempMatrix4[13] = 0;
        _tempMatrix4[14] = 0;
        _tempMatrix4[15] = 1;
        
        return Matrix4.multiply(_tempMatrix4, m, m);
    },
    
    /**
     * 设置正交投影矩阵
     * @param m 
     * @param width 
     * @param height 
     * @param depth 
     */
    setOrthogonal(m: Mat4, left: number, right: number, bottom: number, top: number, near: number, far: number): Mat4 {
        let rw = 1 / (right - left),
            rh = 1 / (top - bottom),
            rd = 1 / (far - near);

        m[0] = 2 * rw;
        m[1] = 0;
        m[2] = 0;
        m[3] = -(left + right) * rw;

        m[4] = 0;
        m[5] = 2 * rh;
        m[6] = 0;
        m[7] = -(top + bottom) * rh;

        m[8] = 0;
        m[9] = 0;
        m[10] = -2 * rd;
        m[11] = -(far + near) * rd;

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
    setPerspective(m: Mat4, fovy: number, aspect: number, near: number, far: number): Mat4 {
        let f = Math.cos(fovy / 2) / Math.sin(fovy / 2),
            rd = 1 / (far - near);

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
        m[10] = -(far + near) * rd;
        m[11] = -2 * far * near * rd;

        m[12] = 0;
        m[13] = 0;
        m[14] = -1;
        m[15] = 0;

        return m;
    }
};



