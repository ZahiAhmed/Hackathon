import { loadStripe } from '@stripe/stripe-js';

    const stripePromise = loadStripe('pk_test_51OcwtnKAv9z4Bbo4SUfmVzqCm11341KdC6Lz4Rbq0z9UTGOkia1qqVNRDmh4uAbxhlqB0I36AZOnklZLEvCY0zr100CgfIeG6a');
    // replace test key with live publication key

export default stripePromise;
