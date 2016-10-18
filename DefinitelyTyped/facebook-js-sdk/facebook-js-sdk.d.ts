// Type definitions for the Facebook Javascript SDK
// Project: https://developers.facebook.com/docs/javascript
// Definitions by: Murat ÖNER <https://github.com/muratoner/>
// Definitions: https://github.com/muratoner/typescript/tree/master/DefinitelyTyped/

import fb = facebook;
declare var FB: fb.FacebookStatic;
declare namespace facebook {

    interface FacebookStatic {
        AppEvents: any;
        Canvas: any;
        Event: any;

        api(path: string, done: Function)
        api(path: string, method: "GET" | "POST" | "DELETE", param: facebook.param.Params, success: Function)

        api<T>(path: string, done: (res: T) => void)
        api<T>(path: string, method: "GET" | "POST" | "DELETE", param: facebook.param.Params, success: (res: T) => void)

        /**
         * The method FB.getAuthResponse() is a synchronous accessor for the current authResponse.
         * The synchronous nature of this method is what sets it apart from the other login methods.
         *
         * @param callback function to handle the response.
         */
        getAuthResponse(callback: (response: facebook.response.Auth) => void): void;
        /**
         * FB.getLoginStatus() allows you to determine if a user is
         * logged in to Facebook and has authenticated your app.
         *
         * @param callback function to handle the response.
         */
        getLoginStatus(callback: (response: facebook.response.Auth) => void, roundtrip?: boolean ): void;
        /**
         * The method FB.init() is used to initialize and setup the SDK.
         *
         * @param params params for the initialization.
         */
        init(params: param.InitParams): void;
        /**
         * Use this function to log the user in
         *
         * Calling FB.login() results in the JS SDK attempting to open a popup window.
         * As such, this method should only be called after a user click event, otherwise
         * the popup window will be blocked by most browsers.
         *
         * @param callback function to handle the response.
         * @param options optional ILoginOption to add params such as scope.
         */
        login(callback: (response: facebook.response.Auth) => void, options?: param.LoginOptions): void;
        /**
         * The method FB.logout() logs the user out of your site and, in some cases, Facebook.
         *
         * @param callback function to handle the response
         */
        logout(callback: (response: facebook.response.Auth) => void): void;

        ui: core.UI;
        XFBML: any;
    }

    // Start Params
    namespace param {
        interface Params {
            access_token?: string
            limit?: number
            summary?: boolean
            after?: string
            before?: string
            order?: string
            fields?: string
        }

        interface Profile extends param.Params {

        }

        interface Comment {
            message?: string
        }

        interface InitParams {
            appId: string;
            version?: string;
            cookie?: boolean;
            status?: boolean;
            xfbml?: boolean;
            frictionlessRequests?: boolean;
            hideFlashCallback?: boolean;
        }

        interface LoginOptions {
            auth_type?: string;
            scope?: string;
            return_scopes?: boolean;
            enable_profile_selector?: boolean;
            profile_selector_ids?: string;
        }
    }
    // End Params

    // Start Responses
    namespace response {
        interface Auth {
            status?: string;
            authResponse?: {
                accessToken?: string;
                expiresIn?: number;
                signedRequest?: string;
                userID?: string;
            }
        }
        interface Feed {
            data?: facebook.core.Post[]
        }
        interface Comments {
            paging?: core.Paging
            summary?: core.Summary
            data?: core.Comment[]
        }

        interface Likes {
            paging?: core.Paging
            summary?: core.Summary
            data?: core.UserLike[]
        }
    }
    // End Responses

    // Start Enums
    namespace core.enums{
        enum MessageTagType {
            user, page, group
        }
    }
    // End Enums

    namespace core {
        interface UI {
            // Your app's unique identifier. Required.
            app_id?: string
            method?: "send" | "feed" | "share"
            name?: string
            // Required parameter. The URL that is being sent in the message.
            link?: string
            // A user ID of a recipient. Once the dialog comes up, the sender can specify additional people as recipients.
            to?: string | Array<string>
            description?: string
            // Use with feed method
            quote?: string
        }

        interface Post {
            created_time?: Date
            description?: string
            embeddable?: boolean
            embed_html?: string
            height?: number
            icon?: string
            id?: string
            filter?: string
            full_picture?: string
            message?: string
            name?: string
            success?: boolean
            pageid?: string
            picture?: string
            postid?: string
            story?: string
            width?: number
        }
        interface Paging {
            cursors?: {
                after?: string
                before?: string
            }
        }
        interface User {
            id?: string
            name?: string
        }
        interface Comment {
            // Whether the viewer can reply to this comment
            can_comment?: boolean
            // Whether the viewer can hide this comment. Only visible to a page admin
            can_hide?: boolean
            // Whether the viewer can like this comment
            can_like?: boolean
            // Whether the viewer can remove this comment
            can_remove?: boolean
            // Number of replies to this comment
            comment_count?: boolean
            // The time this comment was made
            created_time?: Date
            // The comment ID
            id?: string
            // The person that made this comment
            from?: User
            // Number of times this comment was liked
            like_count?: number
            // The comment text
            message?: string
            // An array of Profiles tagged in message.
            message_tags?: {
                // ID of the profile that was tagged.
                id?: string
                // Indicates which type of profile is tagged.
                type?: facebook.core.enums.MessageTagType
                // How many unicode code points this tag consists of, after the offset.
                length?: number
                // The text used in the tag.
                name?: string
                // Where the first character of the tagged text is in the message, measured in unicode code points.
                offset: number
            }
            // For comments on a photo or video, this is that object. Otherwise, this is empty.
            object?: Object
            // For comment replies, this the comment that this is a reply to.
            parent?: Comment
            // Whether the viewer has liked this comment.
            user_likes?: boolean
        }
        interface UserLike extends User {
            type?: string
        }
        interface Summary {
            total_count?: number
        }
    }
}
