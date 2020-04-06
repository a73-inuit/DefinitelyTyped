import { Semigroup } from './Semigroup';

export interface Monoid<A> extends Semigroup<A> {
    // empty :: Monoid m => () -> m
    empty(): Monoid<void>;
}
