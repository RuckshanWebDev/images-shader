uniform sampler2D uTexture1;
varying vec2 vUv;

void main(){
    vec4 texColor = texture(uTexture1, vUv);
    gl_FragColor = vec4(texColor.r, 0.0, 0. , 1.0);
}