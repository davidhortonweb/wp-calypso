/**
 * Internal dependencies
 */
import { AUTOMATED_TRANSFER_STATUS_REQUEST } from 'state/action-types';
import { dispatchRequest } from 'state/data-layer/wpcom-http/utils';
import { http } from 'state/data-layer/wpcom-http/actions';
import { setAutomatedTransferStatus } from 'state/automated-transfer/actions';

export const requestStatus = ( { dispatch }, action ) => {
	const { siteId } = action;

	dispatch( http( {
		method: 'GET',
		path: `/sites/${ siteId }/automated-transfers/status`,
		apiVersion: '1',
	}, action ) );
};

export const receiveStatus = ( { dispatch }, { siteId }, next, { status, uploaded_plugin_slug } ) => {
	dispatch( setAutomatedTransferStatus( siteId, status, uploaded_plugin_slug ) );
};

export default {
	[ AUTOMATED_TRANSFER_STATUS_REQUEST ]: [ dispatchRequest(
		requestStatus,
		receiveStatus
	) ]
};
