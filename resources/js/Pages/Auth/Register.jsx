import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import Select from 'react-select';
import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import UploadPreview from "@rpldy/upload-preview";
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import { Container } from 'postcss';

export default function Register() {
    //Reemplazar por opciones en base de datos
    const options = [
        { value: 'particular', label: 'Particular' },
        { value: 'empresa', label: 'Empresa' },
        { value: 'proveedor', label: 'Proveedor' }
      ]
    //Constantes de la página
    const { data, setData, post, processing, errors, reset } = useForm({
        username: '',
        name: '',
        surname: '',
        t_user: '',
        picture: '',
        country: '',
        city: '',
        region: '',
        address: '',
        address_detail: '',
        postal_code: '',
        phone: '',
        document: '',
        t_document: '',
        email: '',
        password: '',
        password_confirmation: '',
        notifications: ''
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation', 'notifications');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <Guest>
            <Head title="Register" />

            <ValidationErrors errors={errors} />
            <form onSubmit={submit}>
                <div className='grid grid-cols-2 gap-4'>
                    
                    <div>
                        <Label forInput="name" value="Nombre (s)" />
                        <Input
                            type="text"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
                        />
                    </div>

                    <div>
                        <Label forInput="surname" value="Apellido (s)" />
                        <Input
                            type="text"
                            name="surname"
                            value={data.surname}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
                        />
                    </div>

                    <div>
                        <Label forInput="username" value="Nombre de Usuario" />
                        <Input
                            type="text"
                            name="username"
                            value={data.username}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
                        />
                    </div>

                    <div>
                        <Label forInput="t_user" value="Tipo de Usuario" />
                        <Select
                            name="t_user"
                            options={options}
                            className="mt-1 block w-full"
                            autoComplete="t_user"
                            isFocused={true}
                            required
                            >
                        </Select>
                    </div>

                    <div className='col-span-2'>
                        <Label forInput="picture" value="Foto de Perfil" />
                        <Uploady
                            name="picture"
                            value={data.picture}
                            className="input mt-1 block w-full"
                            autoComplete="picture"
                            handleChange={onHandleChange}
                            accept= 'image/*'
                        >
                        <Button>
                            <UploadButton
                            text='Subir Imagen'
                            className='Button'
                            />
                        </Button>
                        <div>
                            <UploadPreview
                            className='w-10'
                            />
                        </div>
                        </Uploady>  

                    </div>

                    <div className='col-span-2'>
                        <Label forInput="email" value="Email" />
                        <Input
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            handleChange={onHandleChange}
                            required
                        />
                    </div>

                    <div>
                        <Label forInput="password" value="Password" />

                        <Input
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            handleChange={onHandleChange}
                            required
                        />
                    </div>

                    <div>
                        <Label forInput="password_confirmation" value="Confirm Password" />

                        <Input
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            handleChange={onHandleChange}
                            required
                        />
                    </div>

                    <div>
                        <Label forInput="password_confirmation" value="Confirm Password" />

                        <Input
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            handleChange={onHandleChange}
                            required
                        />
                    </div>

                    <div className="col-span-2 flex items-center justify-end mt-4 ">
                        <Link href={route('login')} className="underline text-sm text-gray-600 hover:text-gray-900">
                            Already registered?
                        </Link>

                        <Button className="ml-4" processing={processing}>
                            Register
                        </Button>
                    </div>
                </div>

            </form>
        </Guest>
    );
}
