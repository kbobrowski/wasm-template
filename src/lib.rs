use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add_i8(a: i8, b: i8) -> i8 {
  a + b
}

#[wasm_bindgen]
pub fn add_i16(a: i16, b: i16) -> i16 {
  a + b
}

#[wasm_bindgen]
pub fn add_i32(a: i32, b: i32) -> i32 {
  a + b
}

#[wasm_bindgen]
pub fn add_f32(a: f32, b: f32) -> f32 {
  a + b
}

#[wasm_bindgen]
pub fn add_f64(a: f64, b: f64) -> f64 {
  a + b
}
