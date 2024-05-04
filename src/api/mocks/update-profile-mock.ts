import { HttpResponse, http } from "msw";

import { UpdateProfileBody } from '../update-profile'

export const updateProfileMock =http.put<
    never, 
    UpdateProfileBody
>
('/profile', 
async ({request}) => {

    const {name} = await request.json()

    if(name ===  'Grão Aldeia Shop') {
        return new HttpResponse(null, { status: 204 })
    }
    return new HttpResponse(null, {status: 400})
})