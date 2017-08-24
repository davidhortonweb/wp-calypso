/**
 * External dependencies
 */
import React from 'react';

const JetpackLogo = ( { size, full } ) => {
	const svgIconPath = 'M42,0A42,42,0,1,0,84,42,42,42,0,0,0,42,0ZM40.36,' +
		'51.81,27.17,48.45a5.21,5.21,0,0,1-3.23-7.65L40.36,' +
		'12.35Zm20.32-8.6L44.27,71.65V32.19l13.19,3.36A5.21,5.21,0,0,1,60.69,43.2Z';

	if ( full === true ) {
		return (
			<svg height={ size } className="jetpack-logo" viewBox="0 0 183 32">
			<title>Jetpack</title>
			<path d="M50,7h-5.968L49,11.874v6.14c0,1.091-0.217,2.595-1.016,3.049c-0.749,0.426-1.715,0.307-2.953-0.328
			C43.736,20.07,43.213,19.217,43,19l-2,4c0.111,0.1,2.562,2.669,6,2.669c2.182,0,4.212-0.563,5.469-1.919
			C53.527,22.625,54,20.559,54,18.311v-2.566v-4.85C54,8.727,52.169,7,50,7z" />
			<polygon points="81,10.946 86,10.946 86,25 90.987,25 90.987,10.946 96,10.946 96,7.011 81,7.011" />
			<path d="M109.804,7.011H102V25h4.931v-5h2.642c2.149,0,3.902-0.529,5.125-1.62c1.224-1.091,2.233-2.829,2.233-4.88
			c0-1.818-0.877-3.513-1.969-4.637C113.772,7.673,112.086,7.011,109.804,7.011z M111.16,15.51c-0.562,0.364-1.29,0.496-1.951,0.496
			h-2.278v-5.192h2.344c0.694,0,1.554,0.099,2.116,0.628c0.463,0.43,1.04,1.058,1.04,1.918
			C112.431,14.418,111.788,15.146,111.16,15.51z" />
			<path d="M129.931,6.496c-2.48,0-4.594,1.176-5.85,2.432c-1.422,1.422-2.116,3.505-2.116,5.39V25h4.967v-5h6v5h5V14.319
			c0-1.885-0.694-3.968-2.116-5.39C134.558,7.673,132.477,6.496,129.931,6.496z M132.931,14.578V16h-6v-1.422
			c0-1.125-0.009-1.949,0.52-2.578c0.628-0.694,1.554-1.025,2.48-1.025c0.992,0,1.885,0.298,2.546,1.025
			C133.006,12.629,132.931,13.453,132.931,14.578z" />
			<polygon points="61.079,24.989 75,24.989 75,21.12 66,21.12 66,17.88 73,17.88 73,14.01 66,14.01 66,10.902 75,10.902 75,7
			61.079,7" />
			<path d="M157.566,19.97c-0.093,0.048-0.187,0.096-0.282,0.143c-0.017,0.008-0.033,0.016-0.05,0.024
			c-1.007,0.481-2.119,0.83-3.381,0.83c-1.521,0-2.877-0.529-3.77-1.455c-0.959-0.893-1.521-2.215-1.521-3.802
			c0-1.323,0.463-2.48,1.224-3.406c0.926-1.125,2.348-1.819,4.133-1.819c1.021,0,1.828,0.18,2.682,0.524
			c0.05,0.02,0.104,0.043,0.156,0.065c0.092,0.039,0.184,0.079,0.278,0.121c0.039,0.018,0.079,0.036,0.119,0.055
			c0.061,0.029,0.124,0.06,0.186,0.09c0.203,0.1,0.415,0.21,0.638,0.338l1.715-3.603c-0.34-0.235-0.749-0.443-1.115-0.61
			c-1.265-0.59-2.762-0.982-4.858-0.982c-2.844,0-5.489,1.224-7.275,3.141c-1.521,1.62-2.447,3.704-2.447,6.085
			c0,2.877,1.058,5.192,2.778,6.812c1.719,1.62,4.134,2.48,6.878,2.48c2.308,0,4.002-0.531,5.442-1.258
			c0.027-0.013,0.053-0.026,0.08-0.04c0.006-0.003,0.012-0.006,0.017-0.009c0.236-0.119,0.49-0.254,0.689-0.379l-1.778-3.642
			C157.916,19.783,157.736,19.881,157.566,19.97z" />
			<polygon points="182,7.011 176.207,7.011 171,12.729 171,7 168,7 168,7.011 166,7.011 166,25 168,25 170.365,25 171,25 171,18.541
			171.489,18.023 176.758,25 182,25 174.465,14.914" />
			<path d="M16,0C7.163,0,0,7.163,0,16c0,8.837,7.163,16,16,16s16-7.163,16-16C32,7.163,24.837,0,16,0z M15,19.736l-5.026-1.279
			c-1.275-0.324-1.887-1.777-1.23-2.916L15,4.704V19.736z M23.255,16.459L17,27.296V12.264l5.026,1.279
			C23.301,13.868,23.913,15.32,23.255,16.459z" />
			</svg>
		);
	}

	return (
		<svg
			className="jetpack-logo"
			height={ size }
			width={ size }
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 84 84"
		>
			<path d={ svgIconPath } />
		</svg>
	);
};
export default JetpackLogo;
