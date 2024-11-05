import supabase, { supabaseUrl } from "./supabase";

// Log user in
export async function login({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) throw new Error(error.message);

    return data
}

export async function getCurrentUser() {
    const { data: session, error } = await supabase.auth.getSession();

    // If there is no session, return null
    if (!session.session) return null;
    if (error) throw new Error(error.message);
    return session.session?.user;
}

export async function signUp({ name, email, password, profilePic }) {
    const fileName = `dp-${name.split(" ").join("-")}-${Math.random()}`;
    const { error: storageError } = await supabase.storage
        .from("profile_pic")
        .upload(fileName, profilePic);

    if (storageError) throw new Error(storageError.message);

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                name,
                profilePic: `${supabaseUrl}/storage/v1/object/public/profile_pic/${fileName}`,
            }
        }
    })

    if (error) throw new Error;
    return data;
}
