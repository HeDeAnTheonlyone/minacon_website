
type Vector2 = {
        x: number,
        y: number
    }

const VecMath = {
    length(v: Vector2): number {
        return Math.sqrt(v.x ** 2 + v.y ** 2);
    },

    normalize(v: Vector2): Vector2 {
        const l = VecMath.length(v);
        if (l == 0)
            return {
                x: 0,
                y: 0
            }
        else
            return {
                x: v.x / l,
                y: v.y / l
            };
    },

    scale(v: Vector2, scalar: number): Vector2 {
        return {
            x: v.x * scalar,
            y: v.y * scalar
        }
    },

    add(v1: Vector2, v2: Vector2): Vector2 {
        return {
            x: v1.x + v2.x,
            y: v1.y + v2.y
        }
    },

    subtract(v1: Vector2, v2: Vector2): Vector2 {
        return {
            x: v1.x - v2.x,
            y: v1.y - v2.y
        }
    }
}

export { type Vector2, VecMath };