varying vec2 vUv;
uniform vec2 uMouse;

void main(){

    vUv = uv;
    vec2 center = uv - 0.5;
    // float dis = distance(center, uMouse);

    vec3 newPosition = position;
    // newPosition.z = dis * 100.0;

    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(newPosition, 1.0);
}