<script setup lang="ts">

const firstName = useState('firstName', () => '')
const lastName = useState('lastName', () => '')
const email = useState('email', () => '')
const message = useState('message', () => '')
const isDisabled = useState('isDisabled', () => false)



function onReset(){
    console.log("Reset function called.");
}

async function onSubmit()
{
    //TODO: Validation
    isDisabled.value = true

    var msg = await $fetch('/api/contact', {
        method: 'POST',
        body: {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            message: message.value
        }
    })
    
    isDisabled.value = false

    firstName.value = ''
    lastName.value = ''
    email.value = ''
    message.value = ''


    alert("Message Sent Successfully")
    
}

</script>
<template>
    <div>
        <Head>
            <Title>Contact Us</Title>
        </Head>
        
        <h1 class="font-bold text-slate-800 text-lg max-w-screen-lg mx-auto my-5">Contact Us</h1>

        <form @submit.prevent="onSubmit" @reset="onReset" class="max-w-screen-lg mx-auto">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-slate-800 text-xs font-bold mb-2" for="grid-first-name">
                        First Name
                    </label>
                    <input v-model="firstName" class="appearance-none block w-full  text-slate-800 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" required>
                    <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-slate-800 text-xs font-bold mb-2" for="grid-last-name">
                        Last Name
                    </label>
                    <input v-model="lastName" class="appearance-none block w-full  text-slate-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text">
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-slate-800 text-xs font-bold mb-2" for="grid-password">
                        E-mail
                    </label>
                    <input v-model="email" class="appearance-none block w-full  text-slate-800 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" required>
                
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-slate-800 text-xs font-bold mb-2" for="grid-password">
                        Message
                    </label>
                    <textarea v-model="message" class=" no-resize appearance-none block w-full  text-slate-800 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" required></textarea>                
                </div>
            </div>
            <div class="md:flex md:items-center">
                <div class="md:w-1/3">
                    <button :disabled="isDisabled" class="shadow bg-red hover:bg-red focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded disabled:opacity-50" type="submit">
                        Send
                    </button>
                </div>
                <div class="md:w-2/3"></div>
            </div>
        </form>

    </div>
</template>