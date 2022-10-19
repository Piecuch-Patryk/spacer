<template>
    <div class="outer-wrapper">
        <div class="inner-wrapper">
            <div class="photo">
                <img :src="photo" :alt="title">
            </div>
            <div class="description">
                <h2 class="title">{{ title }}</h2>
                <p class="description">{{ description }}</p>
            </div>
        </div>
        <button class="close" @click="$emit('closeModal')"></button>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            photo: null,
            title: null,
            description: null,
        };
    },
    mounted() {
        this.photo = this.item.links[0].href;
        this.title = this.item.data[0].title;
        this.description = this.item.data[0].description.substring(0, 200);
    },
};

</script>

<style lang="scss" scoped>
    .outer-wrapper {
        background-color: #f6f6f6;
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        overflow: hidden;
        border: 20px solid #fff;

        @media (min-width: 1024px) {
            max-width: 70%;
            height: 60%;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            box-shadow: 0 30px 30px -10px rgba(0,0,0,.3);
            border-radius: 10px;
        }

        .close {
            position: absolute;
            top: 0;
            right: 0;
            width: 30px;
            height: 30px;
            padding: 30px;

            &::before,
            &::after {
                content: '';
                position: absolute;
                top: 30px;
                right: 20px;
                width: 20px;
                height: 2px;
                background: black;
                display: block;
            }
            &::before {
                transform: rotate(45deg);
            }
            &::after {
                transform: rotate(-45deg);
            }

            &:hover {
                cursor: pointer;
            }
        }
        .inner-wrapper {
            display: flex;
            flex-direction: column;
            height: 100%;
            padding: 50px;
            justify-content: center;
            align-items: center;

            @media (min-width: 1024px) {
                flex-direction: row;

                .photo {
                    min-width: 50%;
                    margin-right: 20px;
                }
            }
            .photo {
                width: 100%;
                height: auto;
                background: black;

                img {
                    width: 100%;
                }
            }

            .description {
                color: #333;

                .title {
                    padding: 10px 0;
                }
            }
        }
    }
</style>
