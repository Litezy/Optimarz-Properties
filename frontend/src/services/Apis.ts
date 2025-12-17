// /admin apis
const admin = 'admin'
export const adminUrls = {
    create: 'admin/create-admin',
    update: 'admin/update-admin',
    login: 'admin/login',
    fetch_single_admin: 'admin',
    // fetch_all_admin: 'admin/all-admins',
    // delete_admin: 'admin'
}



export const contactUrls = {
    send_msg: "contact/send-message",
    fetch_msgs: "contact/all",
    delete_msg: "contact/delete",
}


export const blogUrls = {
    create_blog: "blogs/create",
    update_blog: "blogs/update",
    fetch_single_blog: "blogs",
    fetch_by_slug:'blogs/slug',
    fetch_all_blogs: "blogs/all",
    fetch_by_category: "blogs/category",
    delete_blog: "blogs/delete",
}


export const waitlistUrls = {
    join: "waitlist/create",
    fetch_wls: "waitlist/all",
    delete_wl: "waitlist/delete",
}

export const downloadsUrls = {
    create: "downloads/create",
    fetch_all: "downloads/all",
    delete: "downloads/delete",
}