const sampleQuizQuestionsAsString: string =
    [
        '1',
        'Who is the only person to have won four Best Actress Oscars?',
        'Katherine Hepburn',
        'https://img.cinemablend.com/filter:scale/quill/4/d/2/5/7/8/4d257854a4bf05b675703332398612c0ad89d1b6.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Katharine_Hepburn_publicity_photograph.jpg/800px-Katharine_Hepburn_publicity_photograph.jpg',
    ].join('\t') +
    '\n' +
    [
        '2',
        '"Which Olympic sport combines cross-country skiing and rifle shooting?"',
        'Biathlon',
        'https://upload.wikimedia.org/wikipedia/commons/b/b3/Biathlon_Schalke.jpg',
        '',
    ].join('\t') +
    '\n' +
    [
        '',
        "Which everyday object is known as 'ein Handy' in German?",
        'Mobile phone',
        '',
        'https://static.dw.com/image/17776736_303.jpg',
    ].join('\t') +
    '\n' +
    [
        '',
        'The ten highest mountain summits in the United States are located in which state?',
        'Alaska',
    ].join('\t') +
    '\n' +
    [
        '',
        'Which method of cooking is also an event where a guest of honour is subjected to jokes at their expense?',
        'Roast',
    ].join('\t') +
    '\n' +
    [
        '',
        'Andre Agassi has been married to which fellow tennis player since 2001?',
        'Steffi Graf',
        '',
        'https://upload.wikimedia.org/wikipedia/commons/f/f0/Steffi_Graf_in_Hamburg_2010_%28cropped%29.jpg',
    ].join('\t') +
    '\n' +
    [
        '',
        "Who 'lives in a pineapple under the sea'?",
        'SpongeBob Squarepants',
        '',
        'https://img.huffingtonpost.com/asset/5bb553f63c000020010cdec7.jpeg',
    ].join('\t') +
    '\n' +
    [
        '',
        "What is the first of Paul Simon's '50 Ways to Leave Your Lover'?",
        'You just slip out the back, Jack',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Paul_Simon_at_the_9-30_Club_%28b%29.jpg/1024px-Paul_Simon_at_the_9-30_Club_%28b%29.jpg',
    ].join('\t');

// const sampleQuizQuestionsAsString =
//     [
//         '1',
//         'Who is the only person to have won four Best Actress Oscars? Who is the only person to have won four Best Actress Oscars? Who is the only person to have won four Best Actress Oscars? Who is the only person to have won four Best Actress Oscars? Who is the only person to have won four Best Actress Oscars? Who is the only person to have won four Best Actress Oscars?',
//         'Katherine Hepburn',
//         '',
//         'https://media-cache-ak0.pinimg.com/736x/2e/c5/d0/2ec5d07be9390be372c0f0598caac983.jpg',
//     ].join('\t') +
//     '\n' +
//     [
//         '2',
//         '"Which Olympic sport combines cross-country skiing and rifle shooting?\n(It has eight letters.)"',
//         'Biathlon',
//         'https://www.nydailynews.com/resizer/nPhEppVtJM04awPbKjOLH2D6gMY=/415x302/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/QYGL5ZRWNC7IT4O4HSDSOZV7LE.jpg',
//         '',
//     ].join('\t') +
//     '\n' +
//     [
//         '2',
//         '"Which Olympic sport combines cross-country skiing and rifle shooting?\n(It has eight letters.)"',
//         'Biathlon',
//         'https://www.nydailynews.com/resizer/nPhEppVtJM04awPbKjOLH2D6gMY=/415x302/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/QYGL5ZRWNC7IT4O4HSDSOZV7LE.jpg',
//         '',
//     ].join('\t') +
//     '\n' +
//     [
//         '2',
//         '"Which Olympic sport combines cross-country skiing and rifle shooting?\n(It has eight letters.)"',
//         'Biathlon',
//         'https://www.nydailynews.com/resizer/nPhEppVtJM04awPbKjOLH2D6gMY=/415x302/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/QYGL5ZRWNC7IT4O4HSDSOZV7LE.jpg',
//         '',
//     ].join('\t') +
//     '\n' +
//     [
//         '2',
//         '"Which Olympic sport combines cross-country skiing and rifle shooting?\n(It has eight letters.)"',
//         'Biathlon',
//         'https://www.nydailynews.com/resizer/nPhEppVtJM04awPbKjOLH2D6gMY=/415x302/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/QYGL5ZRWNC7IT4O4HSDSOZV7LE.jpg',
//         '',
//     ].join('\t') +
//     '\n' +
//     [
//         '2',
//         '"Which Olympic sport combines cross-country skiing and rifle shooting?\n(It has eight letters.)"',
//         'Biathlon',
//         'https://www.nydailynews.com/resizer/nPhEppVtJM04awPbKjOLH2D6gMY=/415x302/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/QYGL5ZRWNC7IT4O4HSDSOZV7LE.jpg',
//         '',
//     ].join('\t') +
//     '\n' +
//     [
//         '2',
//         '"Which Olympic sport combines cross-country skiing and rifle shooting?\n(It has eight letters.)"',
//         'Biathlon',
//         'https://www.nydailynews.com/resizer/nPhEppVtJM04awPbKjOLH2D6gMY=/415x302/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/QYGL5ZRWNC7IT4O4HSDSOZV7LE.jpg',
//         '',
//     ].join('\t') +
//     '\n' +
//     [
//         '2',
//         '"Which Olympic sport combines cross-country skiing and rifle shooting?\n(It has eight letters.)"',
//         'Biathlon',
//         'https://www.nydailynews.com/resizer/nPhEppVtJM04awPbKjOLH2D6gMY=/415x302/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/QYGL5ZRWNC7IT4O4HSDSOZV7LE.jpg',
//         '',
//     ].join('\t') +
//     '\n' +
//     [
//         '',
//         "Which everyday object is known as 'ein Handy' in German?",
//         'Mobile phone',
//         '',
//         'https://static.dw.com/image/17776736_303.jpg',
//     ].join('\t');

export { sampleQuizQuestionsAsString };
