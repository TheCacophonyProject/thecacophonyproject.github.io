/* tslint:disable */
/**
* @param {number} size 
*/
export function init_buffer_with_size(size: number): void;
/**
* @param {Uint8Array} chunk 
* @param {number} offset 
*/
export function insert_chunk_at_offset(chunk: Uint8Array, offset: number): void;
/**
* @param {Uint8Array} input 
*/
export function init_with_cptv_data(input: Uint8Array): void;
/**
* @returns {number} 
*/
export function get_num_frames(): number;
/**
* @returns {number} 
*/
export function get_width(): number;
/**
* @returns {number} 
*/
export function get_height(): number;
/**
* @returns {number} 
*/
export function get_frame_rate(): number;
/**
* @returns {number} 
*/
export function get_frames_per_iframe(): number;
/**
* @returns {number} 
*/
export function get_min_value(): number;
/**
* @returns {number} 
*/
export function get_max_value(): number;
/**
* @returns {any} 
*/
export function get_header(): any;
/**
* @param {number} number 
* @param {any} callback 
* @returns {boolean} 
*/
export function queue_frame(number: number, callback: any): boolean;
/**
* @param {number} number 
* @param {Uint8Array} image_data 
* @returns {boolean} 
*/
export function get_frame(number: number, image_data: Uint8Array): boolean;

/**
* If `module_or_path` is {RequestInfo}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {RequestInfo | BufferSource | WebAssembly.Module} module_or_path
*
* @returns {Promise<any>}
*/
export default function init (module_or_path?: RequestInfo | BufferSource | WebAssembly.Module): Promise<any>;
        