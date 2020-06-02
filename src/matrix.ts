import { Matrix4 } from "./matrix4";
export { Matrix4 } from "./matrix4";
export { Vector3 } from "./vector3";

export type Mat4 = Float32Array;
export type Mat2 = Float32Array;
export type Vec4 = Float32Array;
export type Vec3 = Float32Array;
export type Vec2 = Float32Array;
export type Quat = number;

export const _tempMatrix4: Mat4 = Matrix4.create();