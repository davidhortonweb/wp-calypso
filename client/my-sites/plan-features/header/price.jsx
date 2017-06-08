/**
 * External dependencies
 */
import React from 'react';
import classNames from 'classnames';

/**
 * Internal Dependencies
 **/
import PlanPrice from 'my-sites/plan-price';

export default function PlanFeaturesHeaderPrice( props ) {
	const {
		currencyCode,
		discountPrice,
		rawPrice,
		isPlaceholder,
		relatedMonthlyPlan,
		site
	} = props;

	if ( isPlaceholder ) {
		const isJetpackSite = !! site.jetpack;
		const classes = classNames( 'is-placeholder', {
			'plan-features__price': ! isJetpackSite,
			'plan-features__price-jetpack': isJetpackSite
		} );

		return (
			<div className={ classes } ></div>
		);
	}

	/* eslint-disable wpcalypso/jsx-classname-namespace */
	if ( discountPrice ) {
		return (
			<span className="plan-features__header-price-group">
				<PlanPrice currencyCode={ currencyCode } rawPrice={ rawPrice } original />
				<PlanPrice currencyCode={ currencyCode } rawPrice={ discountPrice } discounted />
			</span>
		);
	}

	if ( relatedMonthlyPlan ) {
		const originalPrice = relatedMonthlyPlan.raw_price * 12;
		return (
			<span className="plan-features__header-price-group">
				<PlanPrice currencyCode={ currencyCode } rawPrice={ originalPrice } original />
				<PlanPrice currencyCode={ currencyCode } rawPrice={ rawPrice } discounted />
			</span>
		);
	}

	/* eslint-enable wpcalypso/jsx-classname-namespace */

	return (
		<PlanPrice currencyCode={ currencyCode } rawPrice={ rawPrice } />
	);
}