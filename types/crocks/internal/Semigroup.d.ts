export interface Semigroup<A> {
    // concat :: Semigroup a => a ~> a -> a
    concat(a: Semigroup<A>): Semigroup<A>;
}
