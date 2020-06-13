import { Vec2, Vec3 } from "./matrix";


/**
 * 2 维向量
 */
export const Vector2 = {

    /**
     * 创建3维向量
     * @param x 
     * @param y 
     */
    create(x?: number, y?: number): Vec2 {
        let Vec2: Vec2 = new Float32Array(2);

        if(x !== undefined) {
            Vec2[0] = x;
        }

        if(y !== undefined) {
            Vec2[1] = y;
        }

        return Vec2;
    },

    /**
     * 设置向量的值
     * @param v 
     * @param x 
     * @param y 
     */
    set(v: Vec2, x: number, y: number): Vec2 {
        v[0] = x;
        v[1] = y;

        return v;
    },

    /**
     * 克隆向量
     * @param v 
     */
    clone(v: Vec2): Vec2 {
        return this.create(...v);
    },

    /**
     * 复制向量
     * @param v1 
     * @param v2 
     */
    copy(v1: Vec2, v2: Vec2): Vec2 {
        v2[0] = v1[0];
        v2[1] = v1[1];

        return v2;
    },

    /**
     * 向量相加
     * @param v1 
     * @param v2 
     * @param vOut 
     */
    add(v1: Vec2, v2: Vec2, vOut?: Vec2): Vec2 {
        let dest: Vec2;

        if(vOut !== undefined) {
            dest = vOut;
        }
        else {
            dest = this.create();
        }   

        dest[0] = v1[0] + v2[0];
        dest[1] = v1[1] + v2[1];

        return dest;
    },

    /**
     * 向量相减
     * @param v1 
     * @param v2 
     * @param vOut 
     */
    subtract(v1: Vec2, v2: Vec2, vOut?: Vec2): Vec2 {
        let dest: Vec2;

        if(vOut !== undefined) {
            dest = vOut;
        }
        else {
            dest = this.create();
        }   

        dest[0] = v1[0] - v2[0];
        dest[1] = v1[1] - v2[1];

        return dest;
    },

    /**
     * 向量加上一个数
     * @param v 
     * @param n 
     */
    addNum(v: Vec2, n: number): Vec2 {
        v[0] = v[0] + n;
        v[1] = v[1] + n;

        return v;
    },

    /**
     * 点积
     * @param v1
     * @param v2
     */
    dot(v1: Vec2, v2: Vec2): number {
        return v1[0] * v2[0] + v1[1] * v2[1];
    },

    /**
     * 叉积
     * @param v 
     */
    cross(v1: Vec2, v2: Vec2): number {
        return v1[0] * v2[1] - v2[0] * v1[1];
    },

    /**
     * 与标量进行叉积
     * @param v
     * @param n
     * @param vOut
     */
    crossNum(v: number, n: number, vOut?: Vec2): Vec2 {
        (-n * this.y, n * this.x)

        let dest: Vec2;

        if(vOut !== undefined) {
            dest = vOut;
        }
        else {
            dest = this.create();
        }   

        dest[0] = -n * v[1];
        dest[1] = n * v[0];

        return dest;
    },

    /**
     * 投影
     * @param v1
     * @param v2 
     */
    project(v1: Vec2, v2: Vec2): number {
        let dot = v1[0] * v2[0] + v1[1] * v2[1],
            length2 = Math.sqrt(v2[0]**2 + v2[1]**2);

        return dot / length2;
    },

    /**
     * 求模
     * @param v
     */
    length(v: Vec2): number {
        return Math.hypot(v[0], v[1]);
    },

    /**
     * 单位化
     * @param v
     */
    normalize(v: Vec2): Vec2 {
        let len = Math.sqrt(v[0]**2 + v[1]**2);

        if(len !== 0) {
            v[0] = v[0] / len;
            v[1] = v[1] / len;
        }
        else {
            v[0] = v[1] = 0;
        }

        return v;
    },

    /**
     * 求法向
     * @param v 
     * @param vOut 
     */
    normal(v: Vec2, vOut?: Vec2): Vec2 {
        let dest: Vec2;

        if(vOut !== undefined) {
            dest = vOut;
        }
        else {
            dest = this.create();
        }   

        dest[0] = -v[1];
        dest[1] = v[0];

        return dest;
    },

    /**
     * 缩放
     * @param v 
     * @param n 
     */
    scale(v: Vec2, n: number): Vec2 {
        v[0] = v[0] * n;
        v[1] = v[1] * n;

        return v;
    },

    /**
     * 反向
     * @param v
     */
    negate(v: Vec2): Vec2 {
        v[0] = -v[0];
        v[1] = -v[1];

        return v;
    },

    /**
     * 两向量夹角
     * @param v1 
     * @param v2 
     */
    angle(v1: Vec2, v2: Vec2): number {
        let dot = v1[0] * v2[0] + v1[1] * v2[1],
            len1 = Math.hypot(v1[0], v1[1]),
            len2 = Math.hypot(v2[0], v2[1]);

        return Math.acos(dot / (len1 * len2));
    },

    /**
     * 扩展向量 (2 -> 3)
     * @param v 
     */
    extend(v: Vec2): Vec3 {
        let vec4 = new Float32Array(3);

        vec4[0] = v[0];
        vec4[1] = v[1];
        vec4[2] = 1;

        return vec4;
    }
};