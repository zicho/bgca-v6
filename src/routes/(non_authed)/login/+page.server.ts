import { loginUserSchema } from '$lib/validation/schemas/loginUserSchema';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';

export const load = (async () => {
    const form = await superValidate(zod(loginUserSchema))
    return { form };
}) satisfies PageServerLoad;

export const actions = {
    default: async ({ request }) => {
      const form = await superValidate(request, zod(loginUserSchema));
      
      return message(form, 'Could not authenticate', {
        status: 403
      });

      console.dir(form)

      if (!form.valid) {
        return message(form, 'Could not authenticate', {
          status: 403
        });
      }
  
      // TODO: Do something with the validated form.data
  
      // Display a success status message
      redirect(303, "/")
    }
  };