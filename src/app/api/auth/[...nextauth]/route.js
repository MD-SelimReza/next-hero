import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [

        CredentialsProvider({
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    required: true,
                    placeholder: "You email",
                    name: "email",
                },
                password: {
                    label: "Password",
                    type: "password",
                    required: true,
                    placeholder: "Enter Password",
                    name: "password"
                },
            },

            async authorize(credentials) {
                const { email, password } = credentials;

                if (!credentials) {
                    return null;
                }

                if (email) {
                    const currentUser = users.find((user) => user.email === email)
                    if (currentUser) {
                        console.log(currentUser.password, "-->password");
                        if (currentUser.password === password) {
                            return currentUser;
                        }
                    }
                }
                return null;
            },
        }),

    ],
    callbacks: {
        async jwt({ token, account, user }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
                token.type = user.type
            }
            return token;
        },
        async session({ session, token }) {
            session.user.type = token.type
            return session
        },
    }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

const users = [
    {
        id: 1,
        name: "Selim",
        email: "selim@gmail.com",
        type: "Admin",
        password: "password",
        image: "https://picsum.photos/200/300"
    },
    {
        id: 2,
        name: "Sumon",
        email: "sumon@gmail.com",
        type: "User",
        password: "password",
        image: "https://picsum.photos/200/300"
    },
    {
        id: 3,
        name: "Saoun",
        email: "saoun@gmail.com",
        type: "User",
        password: "password",
        image: "https://picsum.photos/200/300"
    },
]

