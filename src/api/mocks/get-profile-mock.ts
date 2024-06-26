import { HttpResponse, http } from "msw";

import { GetProfileResponse } from '../get-profile'

export const getProfileMock =http.get<
    never, 
    never,
    GetProfileResponse
>
('/me', () => {
    return HttpResponse.json({
        id: 'custom-user-id',
        name: 'Joh Doe',
        email: 'johdoe@hotmail.com',
        phone: '81254852265',
        role: 'manager',
        createdAt: new Date(),
        updatedAt: null,
    })
})