/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  Imports
 *
 * */

import type CSSObject from '../../../Core/Renderer/CSSObject';
import type {
    SMAOptions,
    SMAParamsOptions
} from '../SMA/SMAOptions';

/* *
 *
 *  Declarations
 *
 * */

export interface DisparityIndexOptions extends SMAOptions {
    params?: DisparityIndexParamsOptions;
}

export interface DisparityIndexLineOptions {
    styles?: CSSObject;
}

export interface DisparityIndexParamsOptions extends SMAParamsOptions {
    average: 'sma'|'ema'|'dema'|'tema'|'wma';
}

export default DisparityIndexOptions;
