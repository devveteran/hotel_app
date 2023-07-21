export const evalReviewWord = (v: number) => {
    return v >=8.5 ? 'Excellent' : 
        v >=8 ? 'Very Good' :
            v >= 7.5 ? 'Good' : ''
}