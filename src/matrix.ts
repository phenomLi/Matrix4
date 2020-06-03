import { Matrix4 } from "./matrix4";
import { Matrix3 } from "./matrix3";

export { Matrix4 } from "./matrix4";
export { Matrix3 } from "./matrix3";
export { Vector3 } from "./vector3";
export { Vector2 } from "./vector2";

export type Mat4 = Float32Array;
export type Mat3 = Float32Array;
export type Vec4 = Float32Array;
export type Vec3 = Float32Array;
export type Vec2 = Float32Array;
export type Quat = Float32Array;

export const _tempMatrix4: Mat4 = Matrix4.create();
export const _tempMatrix3: Mat3 = Matrix3.create();