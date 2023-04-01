export interface Comment {
    photo: string,
    name: string,
    title: string,
    text: string
}

export interface BigComment extends Comment{
    like: string,
    dislike: string
}

export const data: BigComment[] = [

]