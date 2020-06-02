import { Vec3, Vec4 } from "./matrix";


/**
 * 3 维向量
 */
export const Vector3 = {

    /**
     * 创建3维向量
     * @param x 
     * @param y 
     * @param z 
     */
    create(x?: number, y?: number, z?: number): Vec3 {
        let vec3: Vec3 = new Float32Array(3);

        if(x !== undefined) {
            vec3[0] = x;
        }

        if(y !== undefined) {
            vec3[1] = y;
        }

        if(z !== undefined) {
            vec3[2] = z;
        }

        return vec3;
    },

    /**
     * 设置向量的值
     * @param v 
     * @param x 
     * @param y 
     * @param z 
     */
    set(v: Vec3, x: number, y: number, z: number): Vec3 {
        v[0] = x;
        v[1] = y;
        v[2] = z;

        return v;
    },

    /**
     * 克隆向量
     * @param v 
     */
    clone(v: Vec3): Vec3 {
        return this.create(...v);
    },

    /**
     * 复制向量
     * @param v1 
     * @param v2 
     */
    copy(v1: Vec3, v2: Vec3): Vec3 {
        v2[0] = v1[0];
        v2[1] = v1[1];
        v2[2] = v1[2];

        return v2;
    },

    /**
     * 向量相加
     * @param v1 
     * @param v2 
     * @param vOut 
     */
    add(v1: Vec3, v2: Vec3, vOut?: Vec3): Vec3 {
        let dest: Vec3;

        if(vOut !== undefined) {
            dest = vOut;
        }
        else {
            dest = this.create();
        }   

        dest[0] = v1[0] + v2[0];
        dest[1] = v1[1] + v2[1];
        dest[2] = v1[2] + v2[2];

        return dest;
    },

    /**
     * 向量相减
     * @param v1 
     * @param v2 
     * @param vOut 
     */
    subtract(v1: Vec3, v2: Vec3, vOut?: Vec3): Vec3 {
        let dest: Vec3;

        if(vOut !== undefined) {
            dest = vOut;
        }
        else {
            dest = this.create();
        }   

        dest[0] = v1[0] - v2[0];
        dest[1] = v1[1] - v2[1];
        dest[2] = v1[2] - v2[2];

        return dest;
    },

    /**
     * 向量加上一个数
     * @param v 
     * @param n 
     */
    addNum(v: Vec3, n: number): Vec3 {
        v[0] = v[0] + n;
        v[1] = v[1] + n;
        v[2] = v[2] + n;

        return v;
    },

    /**
     * 点积
     * @param v1
     * @param v2
     */
    dot(v1: Vec3, v2: Vec3): number {
        return v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];
    },

    /**
     * 叉积
     * @param v 
     */
    cross(v1: Vec3, v2: Vec3, vOut?: Vec3): Vec3 {
        let dest: Vec3;

        if(vOut !== undefined) {
            dest = vOut;
        }
        else {
            dest = this.create();
        }   

        let ax = v1[0],
            ay = v1[1],
            az = v1[2];
        let bx = v2[0],
            by = v2[1],
            bz = v2[2];

        dest[0] = ay * bz - az * by;
        dest[1] = az * bx - ax * bz;
        dest[2] = ax * by - ay * bx;

        return dest;
    },

    /**
     * 投影
     * @param v1
     * @param v2 
     */
    project(v1: Vec3, v2: Vec3): number {
        let dot = v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2],
            length2 = Math.sqrt(v2[0]**2 + v2[1]**2 + v2[2]**2);

        return dot / length2;
    },

    /**
     * 求模
     * @param v
     */
    length(v: Vec3): number {
        return Math.hypot(v[0], v[1], v[2]);
    },

    /**
     * 单位化
     * @param v
     */
    normalize(v: Vec3): Vec3 {
        let len = Math.sqrt(v[0]**2 + v[1]**2 + v[2]**2);

        if(len !== 0) {
            v[0] = v[0] / len;
            v[1] = v[1] / len;
            v[2] = v[2] / len;
        }
        else {
            v[0] = v[1] = v[2] = 0;
        }

        return v;
    },

    /**
     * 缩放
     * @param v 
     * @param n 
     */
    scale(v: Vec3, n: number): Vec3 {
        v[0] = v[0] * n;
        v[1] = v[1] * n;
        v[2] = v[2] * n;

        return v;
    },

    /**
     * 反向
     * @param v
     */
    negate(v: Vec3): Vec3 {
        v[0] = -v[0];
        v[1] = -v[1];
        v[2] = -v[2];

        return v;
    },

    /**
     * 两向量夹角
     * @param v1 
     * @param v2 
     */
    angle(v1: Vec3, v2: Vec3): number {
        let ax = v1[0],
            ay = v1[1],
            az = v1[2],
            bx = v2[0],
            by = v2[1],
            bz = v2[2],
            mag1 = Math.sqrt(ax * ax + ay * ay + az * az),
            mag2 = Math.sqrt(bx * bx + by * by + bz * bz),
            mag = mag1 * mag2,
            dot = v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2],
            cosine = mag && dot / mag;

        return Math.acos(Math.min(Math.max(cosine, -1), 1));
    },

    /**
     * 扩展向量 (3 -> 4)
     * @param v 
     */
    extend(v: Vec3): Vec4 {
        let vec4 = new Float32Array(4);

        vec4[0] = v[0];
        vec4[1] = v[1];
        vec4[2] = v[2];
        vec4[3] = 1;

        return vec4;
    }
};